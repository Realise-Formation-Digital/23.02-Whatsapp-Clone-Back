"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MessageController_1 = __importDefault(require("../controllers/MessageController"));
const router = express_1.default.Router();
router.get("/all", MessageController_1.default.getMessagesbyRoomId);
router.get("/:id", MessageController_1.default.getMessageById);
router.post("/", MessageController_1.default.insertMessage);
router.delete("/", MessageController_1.default.deleteMessageByMessageId);
router.put("/", MessageController_1.default.updateMessagebyId);
exports.default = router;
