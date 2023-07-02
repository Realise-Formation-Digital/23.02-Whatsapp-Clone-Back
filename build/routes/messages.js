"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/message/{id}", (req, res) => {
    res.send('Get Message by id').status(200);
});
router.get("/messages", (req, res) => {
    res.send('Get Messages').status(200);
});
router.post("/message", (req, res) => {
    res.send('Post Messages').status(200);
});
router.delete("/message", (req, res) => {
    res.send('Delete Messages').status(200);
});
router.put("/message", (req, res) => {
    res.send('Put Messages').status(200);
});
exports.default = router;
