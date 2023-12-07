import {MongoClient} from 'mongodb'
const connectionString = process.env.MONGODB_CONNECTION_STRING
if(!connectionString){
    throw new Error("connection string belum ada")
}
let client : MongoClient
export const getMongoClientInstance =async()=>{
    if(!client){
        client = new MongoClient(connectionString)
        await client.connect()
    }
    return client
}


