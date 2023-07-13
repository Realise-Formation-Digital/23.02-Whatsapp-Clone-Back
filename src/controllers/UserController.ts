import { Request, Response } from 'express';
import UserModel from "../models/UserModel";

class UserController {
  
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const {username} = req.body
      //todo validator
      console.log('[UserController][Login] Logging in with params', username)
      const result = await UserModel.login(username)
      res.send('ok').status(200)
    }catch (e: any) {
      throw new Error(e)
    }
  }

}

export default UserController;
