import express, { Request, Response } from 'express';
import MessageController from "../controllers/MessageController";
const router = express.Router();

router.get("/all", MessageController.getMessagesbyRoomId)
router.get("/:id", MessageController.getMessageById)
router.post("/", MessageController.insertMessage)
router.delete("/", MessageController.deleteMessageByMessageId)
router.put("/", MessageController.updateMessagebyId)
export default router;
