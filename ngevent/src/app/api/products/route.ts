import { getAllProduct } from '@/db/models/products'
import {z} from 'zod'

export async function GET(request: Request) {

    const products = await getAllProduct()
    console.log(request.headers.get("x-user-id"), "ini user")
    
    return Response.json({
        statusCode: 200,
        message: "message from /api/users",
        data: products
    }, {
        status: 200
    })
}