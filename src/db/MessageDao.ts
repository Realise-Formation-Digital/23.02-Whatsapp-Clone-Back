import {Db, InsertOneResult, MongoClient, ObjectId, WithId} from "mongodb";

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

    static async deleteMessageById (messageIdToDelete: string): Promise<boolean>{
        try {

            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }

    static async findMessageByRoomIdAndMessageId(roomId: string, messageId: string): Promise<Document | null> {
        console.log("[MessageDao][findMessageByRoomIdAndMessageId] Finding message by room id and message id", roomId, messageId)
        try {
            const result: WithId<any> | null  = await this.database.collection(roomId).findOne({_id : new ObjectId(messageId)})
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
}

export default MessageDao;
