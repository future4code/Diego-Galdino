import { Request, Response } from "express"
import connection from "../connection"

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await connection("TodoListUser").select("id","nickname").where("id", id)
        console.log(user)
        res.status(200).send(user[0] )
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
}