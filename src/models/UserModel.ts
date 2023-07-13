import UserDao from "../db/UserDao";
import {InsertOneResult, UpdateResult} from "mongodb";
import RoomDao from "../db/RoomDao";

class UserModel {
  static async login(username: string){
    try {
      console.log('[UserModel][login] Logging in with params', username)
      const userFound: Document[] = await UserDao.findUserByUsername(username)
      console.log('userFound', userFound)
      if (userFound.length === 0) {
        //const userCreated: InsertOneResult<Document> = await this.createUser(username)
        //FIXME this is just for the version 1
        const roomsFound: Document[] | null = await RoomDao.findAllRooms()
        console.log(roomsFound)
        //const updatedRoom: UpdateResult<Document> = await this.insertUserInRoom(userCreated.insertedId.toString(), roomsFound && roomsFound._id.toString())
      }
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
