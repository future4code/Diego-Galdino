import { Request, Response } from "express";
import connection, { tbRecipe } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {

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
            throw new Error("Envie o ID via URL recipe/:id")
        }
        const recipe = await connection(tbRecipe).select("id", "title", "description","created").where("id", id)
        res.status(200).send(recipe[0]);
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}