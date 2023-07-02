import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/message/{id}", (req: Request, res :Response) => {
  res.send('Get Message by id').status(200)
})

router.get("/messages", (req: Request, res :Response) => {
  res.send('Get Messages').status(200)
})

router.post("/message", (req: Request, res :Response) => {
  res.send('Post Messages').status(200)
})

router.delete("/message", (req: Request, res :Response) => {
  res.send('Delete Messages').status(200)
})

router.put("/message", (req: Request, res :Response) => {
  res.send('Put Messages').status(200)
})
export default router;
