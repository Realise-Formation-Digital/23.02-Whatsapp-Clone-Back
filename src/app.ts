import express, { Application } from 'express';

import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import roomRoutes from  './routes/rooms'
import 'dotenv/config'
import './libs/Socket'
import Logger from "./libs/Logger";
import RoomDao from "./db/RoomDao";
import MessageDao from "./db/MessageDao";
const app: Application = express();
new Logger()
const PORT: string  = process.env.SERVER_PORT || '3001';

//Configuration
app.use(express.json());
RoomDao.initializeConnection()
MessageDao.initializeConnection()

//Routes
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);
app.use('/rooms', roomRoutes);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
