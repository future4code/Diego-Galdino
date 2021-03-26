import { Request, Response } from "express"
import connection from "../connection"

export const getUserByName = async (req: Request, res: Response) => {
    try {
        const text = req.query.query
        const user = await connection("TodoListUser").where("name","like",`%${text}%`).where("nickname","like",`%${text}%`)
        res.status(200).send(user )
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}