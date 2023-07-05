import express, { Request, Response } from 'express';
import RoomController from "../controllers/RoomController";
const router = express.Router();

router.get("/:id", (req: Request, res :Response) => {
    res.send('Get Message by id').status(200)
})

router.get("/rooms", (req: Request, res :Response) => {
    res.send('Get Messages').status(200)
})

router.post("/", RoomController.createRoom)

router.delete("/", (req: Request, res :Response) => {
    res.send('Delete Messages').status(200)
})

router.put("/", (req: Request, res :Response) => {
    res.send('Put Messages').status(200)
})
export default router;
