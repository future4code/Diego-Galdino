import { Request, Response } from "express"
import connection, { tbUser, tbUserFollow } from "../connection"
import { getTokenData } from "../services/authenticator"
import { authenticationData } from "../types"

export const unfollowingUser = async (req: Request, res: Response): Promise<void> => {

    const { userToUnfollowId } = req.body
    const tk: string = req.headers.authorization!
    const tokenData: authenticationData | null = getTokenData(tk)

    if (!tokenData) {
        res.statusCode = 401
        throw new Error("Unatuthorized")
    }

    if (!userToUnfollowId) {
        res.statusCode = 422
        throw new Error("'userToUnfollowId' é obrigatório ")
    }

    const [user] = await connection(tbUser).where("id", userToUnfollowId)
    if (!user) {
        res.statusCode = 404
        throw new Error("Não encontrado")
    }
    await connection(tbUserFollow).delete().where({ user_id: tokenData.id }).and.where({user_follow_id:userToUnfollowId})
    res.status(201).send({ message: "Deixou de seguir com sucesso" })
}