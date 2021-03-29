import { Request, Response } from "express";
import { countActors } from "./countActors";

export const getCountActorByGender = async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
        quantity: count,
      })
    } catch (err) {
        res.status(400).send({
        message: err.message,
      })
    }
  }