import { getAllProduct } from '@/db/models/products'
import { NextResponse } from 'next/server'
import {z} from 'zod'

export async function GET(request: Request) {

    const products = await getAllProduct()
    console.log(request.headers.get("x-user-id"), "ini user")
    
    return NextResponse.json({
        statusCode: 200,
        message: "message from /api/users",
        data: products
    }, {
        status: 200
    })
}