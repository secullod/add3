import {mint} from "../../helpers";
import express from "express";

export const postMint = async (req: express.Request, res: express.Response) => {
    try {
        let user = await mint(req.params.address, req.body["toAddress"], req.body["mintAmount"])

        return res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}
