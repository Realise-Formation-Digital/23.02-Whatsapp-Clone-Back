import {MessageModel} from "./models/MessageModel";

class MessageDao {

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
}

export default MessageDao;
