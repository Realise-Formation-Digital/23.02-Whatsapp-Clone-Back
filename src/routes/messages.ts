import express, { Request, Response } from 'express';
import MessageController from "../controllers/MessageController";
const router = express.Router();

router.get("/all", MessageController.getMessagesByRoomId)
router.get("/:id", MessageController.getMessageById)
router.post("/", MessageController.insertMessage)
router.delete("/:id", MessageController.deleteMessageById)
router.put("/", MessageController.updateMessagebyId)
export default router;
