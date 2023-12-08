import { getWishId } from '@/db/models/wishlist'
import { getAllWish } from '@/db/models/wishlist'
import { createWish } from '@/db/models/wishlist'
import {z} from 'zod'

export async function GET(request: Request) {
    const wishlists = await getAllWish()
    return Response.json({
        statusCode: 200,
        message: "message from /api/wishlists",
        data: wishlists
    }, {
        status: 200
    })
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const parsedData = z.object({
            // username: z.string(),
            // email: z.string().email(),
            // password: z.string().min(6),
            // super_admin: z.boolean().optional(),
            // original_name: z.string().optional()
        }).safeParse(data)
        
        if(!parsedData.success){
            throw parsedData.error
        }

        const wishNew = await createWish(data)
        return Response.json({
            statusCode: 201,
            message: "message from post /api/users",
            data: wishNew
        }, {
            status: 201
        })
    } catch (error) {
        if(error instanceof z.ZodError){
            return Response.json({
                status: 400,
                message: 'Error from POST /api/wishlists',
                error: error
            },{
                status: 500
            })
        }
    }
}