import express from 'express';
import {postMint} from "./mint/postMint";

const mintRouter = express.Router();

mintRouter.post("/:address", postMint)
export default mintRouter
