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
