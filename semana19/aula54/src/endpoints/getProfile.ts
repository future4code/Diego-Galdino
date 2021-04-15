import { Request, Response } from "express";
import connection, { tbUser } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export const getProfile = async (req: Request, res: Response): Promise<void> => {

    try {
        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }

        const user = await connection(tbUser).select("id", "name", "email").where("id", tokenData.id)

        res.status(200).send(user[0]);
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}