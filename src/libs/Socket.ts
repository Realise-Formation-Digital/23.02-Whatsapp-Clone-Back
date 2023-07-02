 import { Server } from "socket.io";
 const io = new Server({ /* options */ });
// @ts-ignore
 io.on("connection", (socket) => {
  // ...
  console.log('Connected', socket.id)
 });

 io.listen(3000);
 export default io;
