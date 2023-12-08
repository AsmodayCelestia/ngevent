import {ObjectId} from 'mongodb'
import { getMongoClientInstance  } from "../config";
const DATABASE_NAME = 'ngevent'
export const getDb = async()=>{
    const client = await getMongoClientInstance()
    const db = client.db(DATABASE_NAME)
    return db
}

export type Wish = {
    _id: ObjectId;
    getUserId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
}

export const getAllWish = async () =>{
    const db = await getDb()
    const wishes = (await db.
        collection('products').
        find().
        toArray()) as Wish[]
    return wishes
}

export const getWishId = async (slug:string) =>{
    const db = await getDb()
    const wishBySlug = (await db.
        collection('wishlists').
        findOne({slug})) as Wish
    return wishBySlug
}

export const createWish = async (data:Wish) =>{
    const db = await getDb()
    const modifiedWish: Wish= {
        ...data,
        // name: data.username,
        // password: hashText(data.password)
    }
    console.log(modifiedWish);
    
    const wish = await db.
        collection('wishlists').
        insertOne(data) 
    return wish
}
