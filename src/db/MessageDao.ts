import {Db, MongoClient} from "mongodb";

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
    static async insertMessage (username: string, message: string, roomId: string): Promise<boolean>{
        try {
            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }
}

export default MessageDao;
