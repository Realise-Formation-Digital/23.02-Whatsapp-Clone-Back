import Logger from "../libs/Logger";
import MessageDao from "../db/MessageDao";
import io from "../libs/Socket";
import messageDao from "../db/MessageDao";

class MessageModel {
    static async messageIdToDelete(messageIdToDelete: string){
        try {
            //get room id to send message to each other
            const result: boolean = await MessageDao.deleteMessageById(messageIdToDelete)
            if (result) io.emit('deleted-message', {
                roomId: null,
                messageId: null
            });
        }catch (e: any) {
            Logger.warn(e)
            throw new Error(e)
        }
    }
    static async insertMessage(username: string, roomId: string, message: string){
        try {
            Logger.info('[Model][InsertMessage] Inserting message with params', username, message, roomId)
            //get room id to send message to each other
            const result: boolean = await MessageDao.insertMessage(username, roomId, message)
            if (result) io.emit('inserted-message', {
                roomId: roomId,
                message: message,
                username: username
            });
        }catch (e: any) {
            Logger.warn(e)
            throw new Error(e)
        }
    }
}

export default MessageModel;
