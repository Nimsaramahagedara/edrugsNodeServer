import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', async(req,res)=>{
    res.status(200).json('Server Running');
});
userRouter.get('/all', getAllUsers);
userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);


export default userRouter;