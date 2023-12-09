import { getAllUser } from "@/db/models/users"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const users = await getAllUser()
    return NextResponse.json({
        statusCode: 200,
        message: "message from /api/users",
        data: users
    }, {
        status: 200
    })
}
