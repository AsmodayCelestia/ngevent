import { access } from 'fs';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';
import { readPayloadJose } from './lib/jwt';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log(request.url, "<<<<middleware");
  if(request.url.includes("api/products")){
    const authorization =  cookies().get("Authorization")
    console.log(authorization);
    
    if(!authorization){
        return NextResponse.json(
            {
                message: "Authentication Failed"
            },
            {status:401}
        )
    }
    const accessToken = authorization.value.split(" ")[1]
    const decodedUser = readPayloadJose<{ _id: string, email: string }>(accessToken)
    // console.log(decodeUser);
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-user-id", (await decodedUser)._id)
    requestHeaders.set("x-user-email", (await decodedUser).email)
    
    const response = NextResponse.next({
      request: {
        headers: requestHeaders
      }
    })
    return response
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}