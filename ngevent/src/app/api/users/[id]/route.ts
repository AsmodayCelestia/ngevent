import { getUserId } from "@/db/models/users"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id // 'a', 'b', or 'c'
    const userById = await getUserId(id)
    return NextResponse.json({
        statusCode: 200,
        message: `Message from /api/users/${id}`,
        data: userById
    }, {
        status: 200
    })
  }