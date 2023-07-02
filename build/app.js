"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const messages_1 = __importDefault(require("./routes/messages"));
require("dotenv/config");
require("./libs/Socket");
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT;
//Configuration
app.use(express_1.default.json());
//Routes
app.use('/users', users_1.default);
app.use('/messages', messages_1.default);
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
