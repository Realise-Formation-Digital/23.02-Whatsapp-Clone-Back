import {Db, DeleteResult, InsertOneResult, MongoClient, ObjectId, WithId} from "mongodb";
import IMessage from "../interfaces/IMessage";

class MessageDao {

    static client: MongoClient
    static database: Db

    static initializeConnection(){
        const url: any = process.env.MONGODB_MESSASGES_CONNECTION_STRING
        this.client = new MongoClient(url)
        this.database = this.client.db('Messages')
    }
    static async createMessageCollection(id: string){
        try {
            await this.database.createCollection(id)
        }catch (e: any) {
            throw new Error(e)
        }
    }

    static async deleteMessageByIdAndRoomId (messageId: string, roomId: string): Promise<DeleteResult>{
        try {
            console.log("[MessageDao][deleteMessageByIdAndRoomId] Deleting message by id and room id with params", roomId, messageId)
            const result: WithId<any> | null = await this.database.collection(roomId).deleteOne({_id : new ObjectId(messageId)})
            return result
        }catch (e: any) {
            throw new Error(e)
        }
    }

    static async findMessageByRoomIdAndMessageId(roomId: string, messageId: string): Promise<Document | null> {
        console.log("[MessageDao][findMessageByRoomIdAndMessageId] Finding message by room id and message id", roomId, messageId)
        try {
            const result: WithId<any> | null = await this.database.collection(roomId).findOne({_id : new ObjectId(messageId)})
            return result
        }catch (e: any) {
            throw new Error(e)
        }
    }

    static async insertMessage (sender: string, message: string, roomId: string): Promise<InsertOneResult<Document>>{
        try {
            console.log('[MessageDao][InsertMessage] Inserting message with params', sender, message, roomId)
            const result: WithId<any> = await this.database.collection(roomId).insertOne({
                message : message,
                sender: sender,
                ts: new Date().getTime()
            })
            return result
        }catch (e: any) {
            throw new Error(e)
        }
    }
    static async findMessageByRoomId (roomId: string): Promise<IMessage[]>{
        console.log('[MessageDao][findMessageById] Finding messages by room id with params', roomId)
        try {
            const result: WithId<any> = await this.database.collection(roomId).find().toArray()
            return result
        }catch (e: any) {
            throw new Error(e)
        }
    }
}

export default MessageDao;
