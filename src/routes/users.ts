import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/{id}", (req, res) => {
  res.send('Get User by id').status(200)
})

router.get("/all", (req, res) => {
  res.send('Get users').status(200)
})

router.post("/", (req, res) => {
  res.send('Post User').status(200)
})

router.delete("/", (req, res) => {
  res.send('Delete User').status(200)
})

router.put("/", (req, res) => {
  res.send('Put User').status(200)
})

export default router;
