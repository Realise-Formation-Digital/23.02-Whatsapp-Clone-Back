import Joi from "joi";
import Logger from "../libs/Logger";

const messageDeleteSchema: Joi.ObjectSchema = Joi.object({
    _id: Joi.string()
})
const messageInsertSchema: Joi.ObjectSchema = Joi.object({
    sender: Joi.string(),
    roomId: Joi.string(),
    message: Joi.string()
})
class MessageValidator {
    static async deleteMessageById(payload: any): Promise<boolean>{
        Logger.info('[Controller][deleteMessageById] Deleting message by id with params', payload)
        try {
            const test= await messageDeleteSchema.validate({_id: payload})
            if(test.error) throw new Error("validation Error")
            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }

    static async insertMessage(payload: any): Promise<boolean>{
        console.log('[MessageValidator][insertMessage] Inserting message by id with params', payload)
        try {
            const test= await messageInsertSchema.validate(payload)
            if(test.error) throw new Error("validation Error")
            return true
        }catch (e: any) {
            throw new Error(e)
        }
    }
}

export default MessageValidator
