import { Schema, model } from 'mongoose';
import IMessage from "../../interfaces/IMessage";

const messageSchema = new Schema<IMessage>({
    username: {type: "String", required: true},
    message: {type: "String", required: true},
    roomId:  {type: "String", required: true}
}, { timestamps: true })

const MessageModel = model<IMessage>('Message', messageSchema)

export { MessageModel }