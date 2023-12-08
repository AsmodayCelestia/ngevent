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

// export const getProductId = async (slug:string) =>{
//     const db = await getDb()
//     // const objectId = new ObjectId(id)
//     const userById = (await db.
//         collection('products').
//         findOne({slug})) as Product
//     return userById
// }
