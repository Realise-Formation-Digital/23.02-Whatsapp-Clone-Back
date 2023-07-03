import Joi from "joi";
import Logger from "../libs/Logger";

const messageDeleteSchema: Joi.ObjectSchema = Joi.object({
    _id: Joi.string()
})
class MessageValidator {
    static async deleteMessageById(payload: any): Promise<Joi.ValidationResult<any> | undefined>{
        Logger.info('[Controller][deleteMessageById] Deleting message by id with params', payload)
        try {
            const test= await messageDeleteSchema.validate({_id: payload})
            if(test.error) throw new Error("validation Error")
            return await messageDeleteSchema.validate({_id: payload})
        }catch (e: any) {
            throw new Error(e)
        }
    }
}

export default MessageValidator