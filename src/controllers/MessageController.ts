import { Request, Response } from 'express';
import Logger from "../libs/Logger";

/**
 * @class
 * @classdesc Message Controller
 * @author Marco Tribuzio
 */
class MessageController {
    static async getMessageById(req: Request, res: Response){
        Logger.info('message')
        res.send('Get Message by id').status(200)
    }

    static async getMessagesbyRoomId(req: Request, res: Response) {
        res.send('Get Messages').status(200)
    }

    static async deleteMessageByMessageId(req: Request, res: Response){
        res.send('Delete Messages').status(200)
    }

    static async insertMessage(req: Request, res: Response) {
        res.send('Post Messages').status(200)
    }

    static async updateMessagebyId(req: Request, res: Response) {
        res.send('Put Messages').status(200)
    }
}

export default MessageController;
