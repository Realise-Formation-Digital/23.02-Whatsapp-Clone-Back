import { Request, Response } from 'express';
import Logger from "../libs/Logger";
import MessageValidator from "../middlewares/MessageValidator";
import MessageModel from "../models/MessageModel";
/**
 * @class
 * @classdesc Message Controller
 * @author Marco Tribuzio
 */
class MessageController {
    static async getMessageById(req: Request, res: Response): Promise<void>{
        //TODO check if authenticated
        Logger.info('message')
        res.send('Get Message by id').status(200)
    }

    static async getMessagesByRoomId(req: Request, res: Response): Promise<void> {
        //TODO check if authenticated
        res.send('Get Messages').status(200)
    }

    static async deleteMessageByIdAndRoomId(req: Request, res: Response): Promise<void>{
        try {
            const messageId: string = req.params.id
            const roomId: string = req.body.roomId
            console.log('[Controller][deleteMessageByIdAndRoomId] Deleting message by id and room id with params', messageId, roomId)
            //TODO check if authenticated
            await MessageValidator.deleteMessageById(messageId, roomId)
            await MessageModel.deleteMessageByIdAndRoomId(messageId, roomId)
            res.send('Deleted Messages').status(200)
        }catch (e: any) {
            Logger.warn(e.message)
            res.send('Bad Request').status(400)
        }
    }

    static async insertMessage(req: Request, res: Response) {
        try {
            const {sender, message, roomId} = req.body
            console.log('[MessageController][InsertMessage] Inserting message with params', sender, message, roomId)
            await MessageValidator.insertMessage({sender, message, roomId})
            const result = await MessageModel.insertMessage(sender, message, roomId)
            res.send(result).status(200)
        }catch (e: any) {
            Logger.warn(e.message)
            res.send('Bad Request').status(400)
        }
    }

    static async updateMessageById(req: Request, res: Response) {
        res.send('Put Messages').status(200)
    }
}

export default MessageController;
