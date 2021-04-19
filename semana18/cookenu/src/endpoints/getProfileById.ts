import { Request, Response } from "express";
import connection, { tbUser } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export const getProfileById = async (req: Request, res: Response): Promise<void> => {

    try {
        const id: string = req.params.id
        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }

        if (!id) {
            res.statusCode = 401
            throw new Error("Envie o ID via URL user/:id")
        }
        const user = await connection(tbUser).select("id", "name", "email").where("id", id)
        res.status(200).send(user[0]);
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}