import {ObjectId} from "mongodb";

interface IUser {
  _id: ObjectId,
  username: string
}

export default IUser;
