import { Request, Response } from "express"
import connection from "../connection"

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const task = await connection("TodoListTask").where("id", id)
        res.status(200).send(task[0] )
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}