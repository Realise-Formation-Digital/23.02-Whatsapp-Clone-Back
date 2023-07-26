import {Server} from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
  }
});
// @ts-ignore
io.on("connection", (socket) => {
  // ...
  console.log('Connected', socket.id)
});

io.listen(3000);
export default io;
