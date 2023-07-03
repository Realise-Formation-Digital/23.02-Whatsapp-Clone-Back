import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import roomRoutes from  './routes/rooms'
import 'dotenv/config'
import './libs/Socket'
import Mongoose from "./db";
import Logger from "./libs/Logger";

const app: Application = express();
new Logger()
Mongoose.connect()
const PORT: string  = process.env.SERVER_PORT || '3001';

//Configuration
app.use(express.json());

//Routes
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);
app.use('/rooms', roomRoutes);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
