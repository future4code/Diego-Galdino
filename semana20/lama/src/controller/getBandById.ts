import { Request, Response } from "express";
import { getBandByIdBusiness } from "../business/getBandByIdBusiness";

export const getBandById = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization!
        const id:string = req.body
        const band = await getBandByIdBusiness(id,token)
        res.status(200).send(band)

    } catch (error) {
        res.status(400).send(error.message)
    }
}