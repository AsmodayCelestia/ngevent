import { getAllUser } from "@/db/models/users"

export async function GET(request: Request) {
    const users = await getAllUser()
    return Response.json({
        statusCode: 200,
        message: "message from /api/users",
        data: users
    }, {
        status: 200
    })
}
