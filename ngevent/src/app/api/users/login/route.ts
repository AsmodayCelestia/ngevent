import { comparePass } from "@/db/helpers/hash"
import { createUser } from "@/db/models/users"
import { getUserEmail } from "@/db/models/users"
import { createToken } from "@/lib/jwt"
import { NextResponse } from "next/server"
import {string, z} from 'zod'

const User = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    super_admin: z.boolean().optional(),
    original_name: z.string().optional()
})

export async function POST(request: Request) {
    try {
        const body: {email: string, password:string} = await request.json()
        // console.log(body);
        
        const validation = User.safeParse(body)

        
        if(!validation.success){
            throw validation.error
        }

        const user = await getUserEmail(body.email)
        // console.log(user);
        
        if(!user){
            return NextResponse.json(
                {
                    statusCode: 401,
                    message: "Wrong Email/password",
                },
                {status: 401}
            )
        }
        // console.log(user);
        
        const isValid = comparePass(body.password, user.password )
        // console.log(isValid);
        
        if(!isValid){
            return NextResponse.json(
                {
                    message: "Wrong Email/password"
                },
                {
                    status: 401
                })
        }

        const accessToken = createToken({
            _id: user._id,
            email: user.email
        })
        // console.log(accessToken);
        const response = NextResponse.json(
            {
                message: "Login Success",
                data: {accessToken}
            }, {
                status: 201
            })
            response.cookies.set("Authorization", `Bearer ${accessToken}`)
            console.log(request.headers.get("x-user-id"), "ini user")
        return response
    } catch (error) {
        console.log(error);
        
        if(error instanceof z.ZodError){
            const errPath = error.issues[0].path[0]
            const errMessage = error.issues[0].message
            return NextResponse.json({
                message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
            },{
                status: 400
            })
        }
        return NextResponse.json(
            {
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        )
    }
}