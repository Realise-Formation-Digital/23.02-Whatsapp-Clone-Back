import {Collection, Db, InsertOneResult, MongoClient, ObjectId, WithId} from "mongodb";

class UserDao {
  static client: MongoClient
  static database: Db
  static collection: Collection
  static initializeConnection(): void {
    const url: any = process.env.MONGODB_USERS_CONNECTION_STRING
    this.client = new MongoClient(url)
    this.database = this.client.db('Users')
    this.collection = this.database.collection('Users')
  }
  static async findUserById(userId: string): Promise<Document | null> {
    try {
      console.log('[UserDao][findUserById] Finding user by id with params', userId)
      const result: WithId<any> = await this.collection.findOne({_id: new ObjectId(userId)})
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async findUserByUsername(username: string): Promise <Document[]>{
    try {
      console.log('[UserDao][findUserByUsername] Finding user by username with params', username)
      const result: WithId<any> = await this.collection.find({username: username}).toArray()
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }

  static async createUser(username: string): Promise<InsertOneResult<Document>>{
    try {
      console.log('[UserDao][createUser] Creating user with params', username)
      const result: InsertOneResult<Document> = await this.collection.insertOne({
        username: username
      })
      return result
    }catch (e: any) {
      throw new Error(e)
    }
  }
}

export default UserDao;
