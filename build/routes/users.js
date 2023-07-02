"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/{id}", (req, res) => {
    res.send('Get User by id').status(200);
});
router.get("/all", (req, res) => {
    res.send('Get users').status(200);
});
router.post("/", (req, res) => {
    res.send('Post User').status(200);
});
router.delete("/", (req, res) => {
    res.send('Delete User').status(200);
});
router.put("/", (req, res) => {
    res.send('Put User').status(200);
});
exports.default = router;
