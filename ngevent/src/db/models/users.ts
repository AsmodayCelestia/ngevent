import {ObjectId} from 'mongodb'
import { getMongoClientInstance  } from "../config";
import { hashText } from '../helpers/hash';
const DATABASE_NAME = 'ngevent'
export const getDb = async()=>{
    const client = await getMongoClientInstance()
    const db = client.db(DATABASE_NAME)
    return db
}

export type UserModel = {
    _id: ObjectId;
    name: string,
    username: string;
    email: string;
    password: string;
    superadmin?: boolean;
    original_name:string
}

export type Register = {
    name: string;
    username: string;
    email: string;
    password: string;
    superadmin?: boolean;
    original_name:string
}

export const getAllUser = async () =>{
    const db = await getDb()
    const users = (await db.
        collection('users').
        find().
        project({password: 0}).
        toArray()) as UserModel[]
    return users
}

export const getUserId = async (id:string) =>{
    const db = await getDb()
    const objectId = new ObjectId(id)
    const userById = (await db.
        collection('users').
        findOne({_id: objectId}, {projection: {password: 0}})) as UserModel
    return userById
}

export const createUser = async (data:Register) =>{
    const db = await getDb()
    const modifiedUser: Register = {
        ...data,
        name: data.username,
        password: hashText(data.password)
    }
    console.log(modifiedUser);
    
    const register = await db.
        collection('users').
        insertOne(modifiedUser) 
    return register
}