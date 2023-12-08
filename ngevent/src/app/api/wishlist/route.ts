
import {z} from 'zod'

export async function GET(request: Request) {
    const products = await getAllWishList()
    return Response.json({
        statusCode: 200,
        message: "message from /api/users",
        data: products
    }, {
        status: 200
    })
}