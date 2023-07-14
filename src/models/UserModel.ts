import UserDao from "../db/UserDao";
import {InsertOneResult, UpdateResult, Document} from "mongodb";
import RoomDao from "../db/RoomDao";
import IUser from "../interfaces/IUser";

class UserModel {
  static async login(username: string): Promise<Document>{
    try {
      console.log('[UserModel][login] Logging in with params', username)
      let userFound: IUser = await UserDao.findUserByUsername(username)
      if (!userFound) {
        const userCreated: InsertOneResult = await this.createUser(username)
        //FIXME this is just for the version 1
        const roomsFound: Document[] = await RoomDao.findAllRooms()
        const updatedRoom: UpdateResult = await this.insertUserInRoom(userCreated.insertedId.toString(), roomsFound && roomsFound[0]._id.toString())
        userFound = await UserDao.findUserByUsername(username)
      }
      return userFound
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async createUser(username: string): Promise<InsertOneResult<Document>>{
    try {
      console.log('[UserModel][createUser] Creating user with params', username)
      const result: InsertOneResult<Document> = await UserDao.createUser(username)
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async insertUserInRoom(userId: string, roomId: string): Promise<UpdateResult<Document>>{
    try {
      const result: UpdateResult<Document> = await RoomDao.insertUserInRoom(userId, roomId)
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }
}

export default UserModel;
