import express from 'express';
import {getUser} from "./user/getUser";
import {postUser} from "./user/postUser";

const userRouter = express.Router();

userRouter.get('/:address', getUser);
userRouter.post("/:address", postUser)

export default userRouter
