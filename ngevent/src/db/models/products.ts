import {ObjectId} from 'mongodb'
import { getMongoClientInstance  } from "../config";

const DATABASE_NAME = 'ngevent'
export const getDb = async()=>{
    const client = await getMongoClientInstance()
    const db = client.db(DATABASE_NAME)
    return db
}

export type Product = {
    _id: ObjectId
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price:string;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

export const getAllProduct = async () =>{
    const db = await getDb()
    const products = (await db.
        collection('products').
        find().
        toArray()) as Product[]
    return products
}

export const getProductId = async (slug:string) =>{
    const db = await getDb()
    // const objectId = new ObjectId(id)
    const userById = (await db.
        collection('products').
        findOne({slug})) as Product
    return userById
}
