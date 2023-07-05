import {MessageModel} from "./models/MessageModel";
import {Collection, Db, MongoClient} from "mongodb";

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
            const test = await MessageModel.deleteOne({id: messageIdToDelete})
            console.log(test)
            if (test.deletedCount !== 1) throw new Error('No message delete with id')
            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }
    static async insertMessage (username: string, message: string, roomId: string): Promise<boolean>{
        try {
            const test = new MessageModel({
                username: username,
                message: message,
                roomId: roomId
            })
            await test.save()
            if (!test._id) throw new Error('No message delete with id')
            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }
}

export default MessageDao;
