import { Request, Response } from "express"
import connection from "../connection"

export const getTaskByUserId = async (req: Request, res: Response) => {
    try {
        const id = Number(req.query.creatorUserId)
        const task = await connection("TodoListTask").where("creator_user_id", id)
        res.status(200).send(task[0] )
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}