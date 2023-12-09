import {ObjectId} from 'mongodb'
import { getMongoClientInstance  } from "../config";
import { cookies } from 'next/headers';

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
        collection('wishlists').
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

export const createWish = async (data:Wish, request:Request) =>{
    const {url} = request
    const segment = url.split('/')[5]
    console.log(segment);
    
    
    const db = await getDb()
    const modifiedWish: Wish= {
        ...data,
        getUserId: request.headers.get("x-user-id") as any ,
        productId : segment as string | any,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    console.log(modifiedWish);
    
    const wish = await db.
        collection('wishlists').
        insertOne(modifiedWish) 
    return wish
}
