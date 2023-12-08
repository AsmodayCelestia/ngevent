import { getWishId } from '@/db/models/wishlist'
import { getAllWish } from '@/db/models/wishlist'
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