import { getProductId } from "@/db/models/products"

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug // 'a', 'b', or 'c'
    const productById = await getProductId(slug)
    return Response.json({
        statusCode: 200,
        message: `Message from /api/products/${slug}`,
        data: productById
    }, {
        status: 200
    })
  }