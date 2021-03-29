import { Request, Response } from "express";
import connection from "../connection"

export const getActorById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await connection("Actor").where("id", id)
        // connection.raw(`
        //     SELECT * FROM Actor WHERE id = '${id}'
        //   `)
        res.status(200).send(actor[0])
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}