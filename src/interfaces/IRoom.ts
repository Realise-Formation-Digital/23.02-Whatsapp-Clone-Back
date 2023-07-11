import {ObjectId} from 'mongodb'
import IMessage from "./IMessage";

//TODO
enum roomType {
    'SingleChat', 'GroupChat'
}

interface IRoom {
    _id: ObjectId,
    roomType: roomType,
    admins: String[],
    guests: String[],
    messages: IMessage[],
    avatar: String
}

export default IRoom
