"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async()=>{
    cookies().get("Authorization") && cookies().delete("Authorization")
    redirect("/login")
}