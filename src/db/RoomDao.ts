import {MongoClient, Db, Collection, InsertOneResult, WithId, ObjectId} from "mongodb";

class RoomDao {
  static client: MongoClient
  static database: Db
  static collection: Collection
  static initializeConnection(){
    const url: any = process.env.MONGODB_ROOMS_CONNECTION_STRING
    this.client = new MongoClient(url)
    this.database = this.client.db('Rooms')
    this.collection = this.database.collection('Rooms')
  }

  static async createRoom(roomName: string, type: string, admins: string[], guests:string[]): Promise<InsertOneResult<Document>>{
    console.log('[DAO][createRoom] Creating room with params', roomName, type, admins, guests)
    try {
      const result = this.collection.insertOne({
        type: type,
        admins: admins,
        guests: guests,
        name: roomName,
        ts: new Date().getTime()
      })
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }
  static async findRoomById(roomId: string): Promise<Document | null>{
    console.log('[DAO][createRoom] Creating room with params', roomId)
    try {
      const result: WithId<any> = await this.collection.findOne({_id: new ObjectId(roomId)})
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async updateRoom() {
    try {
      
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async deleteRoom() {
    try {
      
    }catch (e: any) {
      throw new Error(e)
    }
  }

}

export default RoomDao