import { Request, Response } from "express"
import connection, { tbUser, tbUserFollow } from "../connection"
import { getTokenData } from "../services/authenticator"
import { authenticationData } from "../types"

export const followingUser = async (req: Request, res: Response): Promise<void> => {

    const { userToFollowId } = req.body
    const tk: string = req.headers.authorization!
    const tokenData: authenticationData | null = getTokenData(tk)

    if (!tokenData) {
        res.statusCode = 401
        throw new Error("Unatuthorized")
    }

    if (!userToFollowId) {
        res.statusCode = 422
        throw new Error("'userToFollowId' é obrigatório ")
    }

    const [user] = await connection(tbUser).where("id", userToFollowId)
    if (!user) {
        res.statusCode = 404
        throw new Error("Não encontrado")
    }
    await connection(tbUserFollow).insert({user_id:tokenData.id, user_follow_id:userToFollowId})
    res.status(201).send({ message: "Seguindo com sucesso" })
}