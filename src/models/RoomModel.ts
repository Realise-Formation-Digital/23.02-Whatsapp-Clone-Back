import {InsertOneResult} from "mongodb";
import RoomDao from "../db/RoomDao";
import MessageDao from "../db/MessageDao";
import io from "../libs/Socket";

class RoomModel{

  static async createRoom(roomName: string, type: string, admins: string[], guests:string[]): Promise<Document | null>{
    console.log('[Model][createRoom] Creating room with params', roomName, type, admins, guests)
    try {
      const resultRoom: InsertOneResult<Document> = await RoomDao.createRoom(roomName, type, admins, guests)
      if (!resultRoom.insertedId) throw new Error('Room not created')
      const roomId: string = resultRoom.insertedId.toString() as string
      await MessageDao.createMessageCollection(roomId);
      const roomCreated  = await RoomDao.findRoomById(roomId)
      io.emit('room-created', roomCreated)
      return roomCreated
    }catch (e: any) {
      throw new Error(e)
    }
  }
}

export default RoomModel