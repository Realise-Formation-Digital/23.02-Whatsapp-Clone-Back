import express, { Application, Request, Response } from 'express';
import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import 'dotenv/config'
import './libs/Socket'
const app: Application = express();

const PORT: string | undefined = process.env.SERVER_PORT;

//Configuration
app.use(express.json());

//Routes
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
