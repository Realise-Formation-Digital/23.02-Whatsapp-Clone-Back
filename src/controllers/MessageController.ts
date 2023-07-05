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
    static async getMessageById(req: Request, res: Response){
        //TODO check if authenticated
        Logger.info('message')
        res.send('Get Message by id').status(200)
    }

    static async getMessagesbyRoomId(req: Request, res: Response) {
        //TODO check if authenticated
        res.send('Get Messages').status(200)
    }

    static async deleteMessageById(req: Request, res: Response){
        try {
            const messageIdToDelete: string = req.params.id
            Logger.info('[Controller][deleteMessageById] Deleting message by id with params', messageIdToDelete)
            //TODO check if authenticated
            await MessageValidator.deleteMessageById(messageIdToDelete)
            await MessageModel.messageIdToDelete(messageIdToDelete)
            res.send('Deleted Messages').status(200)
        }catch (e: any) {
            Logger.warn(e.message)
            res.send('Bad Request').status(400)
        }
    }

    static async insertMessage(req: Request, res: Response) {
        try {
            const {username, message, roomId} = req.body
            Logger.info('[Controller][InsertMessage] Inserting message with params', username, message, roomId)
            await MessageValidator.insertMessage({username, message, roomId})
            await MessageModel.insertMessage(username, message, roomId)
            res.send({
                "username":username,
                "message": message,
                "roomId": roomId
            }).status(200)
        }catch (e: any) {
            Logger.warn(e.message)
            res.send('Bad Request').status(400)
        }
    }

    static async updateMessagebyId(req: Request, res: Response) {
        res.send('Put Messages').status(200)
    }
}

export default MessageController;
