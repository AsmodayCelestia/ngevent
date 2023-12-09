import bcryptjs from "bcryptjs"
export const hashText = (text:string): string =>{
    return bcryptjs.hashSync(text)
}

export const comparePass = (text:string, hash:string): boolean =>{
    // console.log(text, hash);
    return bcryptjs.compareSync(text, hash)
}