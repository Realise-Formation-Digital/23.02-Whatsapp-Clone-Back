import { Request, Response } from 'express';
import {Document} from "mongodb";
import UserModel from "../models/UserModel";

class UserController {
  
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const {username} = req.body
      //todo validator
      console.log('[UserController][Login] Logging in with params', username)
      const result: Document = await UserModel.login(username)
      res.send(result).status(200)
    }catch (e: any) {
      throw new Error(e)
    }
  }

}

export default UserController;
