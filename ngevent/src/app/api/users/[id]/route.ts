import { getUserId } from "@/db/models/users"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id // 'a', 'b', or 'c'
    const userById = await getUserId(id)
    return Response.json({
        statusCode: 200,
        message: `Message from /api/users/${id}`,
        data: userById
    }, {
        status: 200
    })
  }