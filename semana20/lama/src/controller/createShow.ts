import { Request, Response } from "express";
import { createShowBusiness } from "../business/createShowBusiness";
import { createShowInputDTO } from "../model/show";


export const createShow = async(req:Request,res:Response)=>{
    try {
        const token: string = req.headers.authorization!
        const {weekDay,startTime,endTime,bandId} = req.body as createShowInputDTO
        const id = await createShowBusiness({weekDay,startTime,endTime,bandId,token})
        res.status(201).send({ message: "Show realizado" ,id})
    } catch (error) {
        res.status(400).send(error.message)
    }
}