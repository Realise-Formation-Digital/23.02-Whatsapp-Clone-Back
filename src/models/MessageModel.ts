import Logger from "../libs/Logger";
import MessageDao from "../db/MessageDao";
import io from "../libs/Socket";
import messageDao from "../db/MessageDao";
import IMessage from "../interfaces/IMessage";
import {InsertOneResult, DeleteResult} from "mongodb";

class MessageModel {
    static async deleteMessageByIdAndRoomId(messageId: string, roomId: string): Promise<DeleteResult>{
        try {
            console.log('[Model][deleteMessageId] Deleting message by id and room id with params', messageId, roomId)
            const result: DeleteResult = await MessageDao.deleteMessageByIdAndRoomId(messageId, roomId)
            if (result.acknowledged && result.deletedCount > 0 ) io.emit('deleted-message', {
                roomId: roomId,
                messageId: messageId
            });
            return result
        }catch (e: any) {
            Logger.warn(e)
            throw new Error(e)
        }
    }
    static async insertMessage(sender: string, message: string, roomId: string): Promise<Document | null>{
        try {
            console.log('[Model][InsertMessage] Inserting message with params', sender, message, roomId)
            //get room id to send message to each other
            const messageInserted: InsertOneResult<Document> = await MessageDao.insertMessage(sender, message, roomId)
            const messageFound = await MessageDao.findMessageByRoomIdAndMessageId(roomId, messageInserted.insertedId.toString())
            if (messageInserted.insertedId) io.emit('new-message', messageFound);
            return messageFound
        }catch (e: any) {
            Logger.warn(e)
            throw new Error(e)
        }
    }
}

export default MessageModel;
