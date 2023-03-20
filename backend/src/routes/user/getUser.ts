import express from "express";
import {getUserData} from "../../helpers";

export const getUser = async (req: express.Request, res: express.Response) => {
    try {
        let user = await getUserData(req.params.address)

        return res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}
