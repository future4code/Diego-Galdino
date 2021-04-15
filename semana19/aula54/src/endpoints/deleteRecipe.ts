import { Request, Response } from "express";
import connection, { tbRecipe } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if(!tokenData){
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }

        const id = req.params.id
        await connection(tbRecipe).delete().where({ id }).where("user_id",tokenData.id)
        res.sendStatus(200)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }

}