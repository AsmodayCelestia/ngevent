import { createUser } from "@/db/models/users"
import { getUserEmail } from "@/db/models/users"
import { NextResponse } from "next/server"
import {z} from 'zod'


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

        const user = await getUserEmail(data.email)
        if(user){
            return NextResponse.json(
                {
                    statusCode: 401,
                    message: "Email already registered"
                },
                {status: 401}
            )
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
            const errPath = error.issues[0].path[0]
            const errMessage = error.issues[0].message
            return NextResponse.json({
                message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
            },{
                status: 400
            })
        }
        return NextResponse.json(
            {
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        )
    }
}