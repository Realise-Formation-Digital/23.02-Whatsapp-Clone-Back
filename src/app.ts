import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import roomRoutes from  './routes/rooms'
import 'dotenv/config'
import './libs/Socket'
import Logger from "./libs/Logger";
import RoomDao from "./db/RoomDao";
import MessageDao from "./db/MessageDao";
import UserDao from "./db/UserDao";
import RoomModel from "./models/RoomModel";
const app: Application = express();
new Logger()
const PORT: string  = process.env.SERVER_PORT || '3001';

//Configuration
const options: cors.CorsOptions = {
  origin: '*',
  methods: 'GET,OPTIONS,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}
app.use(cors(options))
app.use(express.json());

RoomDao.initializeConnection()
MessageDao.initializeConnection()
UserDao.initializeConnection()
RoomModel.createFirstRoomForBoot();

//Routes
app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/messages', messageRoutes);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
