import { Request, Response } from "express";
import { createBandBusiness } from "../business/createBandBusiness";
import { bandInput } from "../model/band";


export const createBand = async (req: Request, res: Response) => {
    try {
        const { name, genre, responsible } = req.body as bandInput;
        const id = await createBandBusiness({ name,  genre, responsible });
        res.status(201).send({ message: "Banda Criada!", id })

    } catch (error) {
        res.status(400).send(error.message)
    }
}