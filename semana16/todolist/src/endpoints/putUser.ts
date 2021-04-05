import { Request, Response } from "express";
import connection from "../connection";
import { createUser } from "./functions/createUser";

export const putUser = async (req: Request, res: Response) => {
    try {
        if (req.body.name !== "" && req.body.nickname !== "" && req.body.email !== "") {
            await createUser(req.body.name, req.body.nickname, req.body.email)
            const id = await connection("TodoListUser").select("id").where("nickname", req.body.nickname)
            res.status(200).send(id[0])
        }else{
            res.status(400).send("Please complete all fields")
        }
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
}