import { getAllUser } from "@/db/models/users"
import { createUser } from "@/db/models/users"
import {z} from 'zod'

export async function GET(request: Request) {
    const users = await getAllUser()
    return Response.json({
        statusCode: 200,
        message: "message from /api/users",
        data: users
    }, {
        status: 200
    })
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const parsedData = z.object({
            username: z.string(),
            email: z.string().email(),
            password: z.string().min(6),
            super_admin: z.boolean().optional(),
            original_name: z.string().optional()
        }).safeParse(data)
        
        if(!parsedData.success){
            throw parsedData.error
        }

        const userNew = await createUser(data)
        return Response.json({
            statusCode: 201,
            message: "message from post /api/users",
            data: userNew
        }, {
            status: 201
        })
    } catch (error) {
        if(error instanceof z.ZodError){
            return Response.json({
                status: 400,
                message: 'Error from POST /api/users',
                error: error
            },{
                status: 500
            })
        }
    }
}