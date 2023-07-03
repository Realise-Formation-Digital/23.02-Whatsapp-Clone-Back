import { Schema, model , Types} from 'mongoose';
import IRoom from "../../interfaces/IRoom";
import IMessage from "../../interfaces/IMessage";

enum roomType {
    'SingleChat', 'GroupChat'
}
const roomSchema = new Schema<IRoom>({
    // @ts-ignore
    roomType: {type: String, enum: roomType,  required: true},
    admins: {type: [String], required: true},
    guests: {type: [String], required: true},
}, { timestamps: true })

const roomModel = model<IRoom>('Room', roomSchema)

export { roomModel }