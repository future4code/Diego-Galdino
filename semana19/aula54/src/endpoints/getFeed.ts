import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export const getFeed = async (req: Request, res: Response): Promise<void> => {

    try {

        const token: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }

        const feed = await connection.raw(`
            select recipes.id, title, description, created,users.id as userId, users.name as userName 
            from cookenu_recipes as recipes
            join cookenu_users as users
            on users.id=recipes.user_id
            join cookenu_users_following as follow
            on users.id=follow.user_id
            where follow.user_id='${tokenData.id}'
        `)

        res.status(200).send({recipes:feed[0]})
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}