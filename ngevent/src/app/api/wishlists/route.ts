import { getWishId } from '@/db/models/wishlist'
import { getAllWish } from '@/db/models/wishlist'
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
    console.log(request.headers.get("x-user-id"), "ini user")
    // 1. dar
    const wishlists = await getAllWish()
    return NextResponse.json({
        statusCode: 200,
        message: "message from /api/wishlists",
        data: wishlists
    }, {
        status: 200
    })
}

