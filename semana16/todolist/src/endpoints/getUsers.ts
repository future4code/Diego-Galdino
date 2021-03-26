import { Request, Response } from "express"
import connection from "../connection"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await connection("TodoListUser")
        res.status(200).send({users:users})
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}