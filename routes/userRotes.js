import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', async(req,res)=>{
    res.status(200).json('Server Running');
});
userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);


export default userRouter;