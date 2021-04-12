import { Request, Response } from "express";
import connection, { tbUser } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if(!tokenData){
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }
        
        if (tokenData.role !== "admin") {
            throw new Error("Somente admin pode acessar essa funcionalidade")
        }

        const id = req.params.id
        await connection(tbUser).delete().where({ id })
        res.sendStatus(200)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }

}