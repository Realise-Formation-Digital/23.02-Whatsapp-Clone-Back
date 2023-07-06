import {Request, Response} from "express";
import Logger from "../libs/Logger";
import RoomModel from "../models/RoomModel";

class RoomController {

  static async createRoom(req: Request, res: Response): Promise<void> {
    try {
      const {roomName, type, admins, guests} = req.body
      console.log('[Controller][createRoom] Creating room with params', roomName, type, admins, guests)
      //TODO check if authenticated
      //TODO Validator
      const result = await RoomModel.createRoom(roomName, type, admins, guests);
      res.send(result).status(200)
    }catch (e) {
      console.error(e)
      res.send('Hai fatto na cazzata').status(400)
    }
  }

  static async getRoomsAndMessages (req: Request, res: Response): Promise<void> {
    try {

    }catch (e) {
      console.error(e)
      res.send('Hai fatto na cazzata').status(400)
    }
  }

}

export default RoomController