import express from 'express';
import UserController from "../controllers/UserController";
const router = express.Router();

//TODO
router.get("/{id}", (req, res) => {
  res.send('Get User by id').status(200)
})

//TODO
router.get("/all", (req, res) => {
  res.send('Get users').status(200)
})

router.post("/login", UserController.login)

//TODO
router.delete("/", (req, res) => {
  res.send('Delete User').status(200)
})

//TODO
router.put("/", (req, res) => {
  res.send('Put User').status(200)
})

export default router;
