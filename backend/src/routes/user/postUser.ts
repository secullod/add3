import {createOrUpdateUser} from "../../helpers";
import express from "express";

export const postUser = async (req: express.Request, res: express.Response) => {
    try {
        let user = await createOrUpdateUser(req.params.address, req.body["balance"])

        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}
