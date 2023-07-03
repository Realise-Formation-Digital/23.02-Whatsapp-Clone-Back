"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const messages_1 = __importDefault(require("./routes/messages"));
const rooms_1 = __importDefault(require("./routes/rooms"));
require("dotenv/config");
require("./libs/Socket");
const db_1 = __importDefault(require("./db"));
const Logger_1 = __importDefault(require("./libs/Logger"));
const app = (0, express_1.default)();
new Logger_1.default();
db_1.default.connect();
const PORT = process.env.SERVER_PORT || '3001';
//Configuration
app.use(express_1.default.json());
//Routes
app.use('/users', users_1.default);
app.use('/messages', messages_1.default);
app.use('/rooms', rooms_1.default);
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
