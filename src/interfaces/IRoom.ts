import {ObjectId} from 'mongodb'
import IMessage from "./IMessage";
import IUser from "./IUser";

//TODO
enum roomType {
  'SingleChat', 'GroupChat'
}

interface IRoom {
  _id: ObjectId,
  roomType: roomType,
  admins: IUser[],
  guests: IUser[],
  messages: IMessage[],
  avatar: String,
  name: String,
  ts: Number
}

interface IRoomMongoDb {
  _id: ObjectId,
  roomType: roomType,
  admins: String[],
  guests: String[],
  avatar: String,
  name: String,
  ts: Number
}

export {IRoom, IRoomMongoDb}
