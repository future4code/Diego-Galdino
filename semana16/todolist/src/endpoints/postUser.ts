import { Request, Response } from "express";
import { updateUser } from "./functions/updateUser";

export const postUser= async (req: Request, res: Response) => {
    try {
        await updateUser(Number(req.params.id), req.body.name, req.body.nickname);
        res.status(200).send({ message: "Success"})
    } catch (err) {
        res.status(400).send({
        message: err.message,
      })
    }
  }