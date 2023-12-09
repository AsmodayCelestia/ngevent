import { getWishId } from "@/db/models/wishlist"
import { createWish } from '@/db/models/wishlist'
import { NextResponse } from "next/server"

import {z} from 'zod'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id // 'a', 'b', or 'c'
    const wishById = await getWishId(id)
    return Response.json({
        statusCode: 200,
        message: `Message from /api/users/${id}`,
        data: wishById
    }, {
        status: 200
    })
  }

  export async function POST(request: Request) {
    try {
        // 1 buat ngambil parameter ada di req
        // const {url} = request
        // console.log(url, 'ini url');
        
        const data = await request.json()
        
        const wishNew = await createWish(data, request)

        return NextResponse.json({
            statusCode: 201,
            message: "message from post /api/wishlists",
            data: wishNew 
        }, {
            status: 201
        })
    } catch (error) {
        if(error instanceof z.ZodError){
            return NextResponse.json({
                status: 400,
                message: 'Error from POST /api/wishlists',
                error: error
            },{
                status: 500
            })
        }
    }
}