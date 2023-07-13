import {Document, InsertOneResult} from "mongodb";
import RoomDao from "../db/RoomDao";
import MessageDao from "../db/MessageDao";
import io from "../libs/Socket";
import UserDao from "../db/UserDao";
import {IRoom, IRoomMongoDb} from "../interfaces/IRoom";
import IUser from "../interfaces/IUser";

class RoomModel{

  static async createRoom(roomName: string, type: string, admins: string[], guests:string[]): Promise<Document | null>{
    console.log('[RoomModel][createRoom] Creating room with params', roomName, type, admins, guests)
    try {
      const resultRoom: InsertOneResult = await RoomDao.createRoom(roomName, type, admins, guests)
      if (!resultRoom.insertedId) throw new Error('Room not created')
      const roomId: string = resultRoom.insertedId.toString() as string
      await MessageDao.createMessageCollection(roomId);
      const roomCreated: Document | null  = await RoomDao.findRoomById(roomId)
      io.emit('room-created', roomCreated)
      return roomCreated
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async createFirstRoomForBoot(): Promise<void> {
    console.log('[RoomModel][createFirstRoomForBoot] Creating first room for boot')
    try {
      const foundFirstRoom: Document[] = await RoomDao.findAllRooms()
      if(foundFirstRoom.length !== 0) return
      console.log('[RoomModel][createFirstRoomForBoot] Found', foundFirstRoom)
      await this.createRoom('First Conversation', 'SingleChat', [], [])
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async getRoomsAndMessages(username: string): Promise<IRoom[]> {
    console.log('[RoomModel][getRoomsAndMessages] Getting rooms and messages with params', username)
    try {
      const foundUser: IUser = await UserDao.findUserByUsername(username)
      if (!foundUser) throw new Error('User not Found')
      const foundRooms: IRoomMongoDb[] = await RoomDao.findRoomsByUserId(foundUser._id.toString())
      if (foundRooms.length === 0) throw new Error('Rooms not found')
      const response: any = await Promise.all(foundRooms.map(async(r: IRoomMongoDb): Promise<IRoom> => {
        return {
          _id: r._id,
          roomType: r.roomType,
          admins: await Promise.all(r.admins.map(async (adminId: any): Promise <IUser> => {
            return await UserDao.findUserById(adminId)
          })),
          guests: await Promise.all(r.guests.map(async (guestId: any): Promise <IUser> => {
            return await UserDao.findUserById(guestId)
          })),
          avatar: '',
          messages: await MessageDao.findMessageByRoomId(r._id.toString()),
          name: r.name,
          ts: r.ts
        }
      }))
      return response
    }catch (e: any) {
      throw new Error(e)
    }
  }
}

export default RoomModel
