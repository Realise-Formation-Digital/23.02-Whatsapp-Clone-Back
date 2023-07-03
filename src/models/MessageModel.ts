import Logger from "../libs/Logger";
import MessageDao from "../db/MessageDao";
import io from "../libs/Socket";
import {resolveObjectURL} from "buffer";

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
}

export default MessageModel;
