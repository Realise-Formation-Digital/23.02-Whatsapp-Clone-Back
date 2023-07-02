"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server({ /* options */});
// @ts-ignore
io.on("connection", (socket) => {
    // ...
    console.log('Connected', socket.id);
});
io.listen(3000);
exports.default = io;
