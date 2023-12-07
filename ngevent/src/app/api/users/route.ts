import { getAllUser } from "@/db/models/user"
import { createUser } from "@/db/models/user"

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

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data);
    
    const userNew = await createUser(data)
    console.log(userNew);
    
    return Response.json({
        statusCode: 201,
        message: "message from post /api/users",
        data: userNew
    }, {
        status: 201
    })
}