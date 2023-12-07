import bcryptjs from "bcryptjs"
export const hashText = (text:string): string =>{
    return bcryptjs.hashSync(text)
}

export const comparePass = (text:string, hash:string): boolean =>{
    return bcryptjs.compareSync(text, hash)
}