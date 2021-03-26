import { Request, Response } from "express";
import connection from "../connection";
import { createTask } from "./functions/createTask";

export const putTask = async(req:Request,res: Response)=>{
    try {
        await createTask(req.body.title, req.body.description, req.body.limitDate, req.body.creatorUserId)
        // const id = await connection("TodoListTask").select("id").where()
        res.status(200).send({message: "Success"})
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
}