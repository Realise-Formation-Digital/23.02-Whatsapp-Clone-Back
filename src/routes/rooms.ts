import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/room/{id}", (req: Request, res :Response) => {
    res.send('Get Message by id').status(200)
})

router.get("/rooms", (req: Request, res :Response) => {
    res.send('Get Messages').status(200)
})

router.post("/room", (req: Request, res :Response) => {
    res.send('Post Messages').status(200)
})

router.delete("/room", (req: Request, res :Response) => {
    res.send('Delete Messages').status(200)
})

router.put("/room", (req: Request, res :Response) => {
    res.send('Put Messages').status(200)
})
export default router;
