import { Request, Response } from "express";
import { getShowByWeekDayBusiness } from "../business/getShowByWeekDayBusiness";


export const getShowByWeekDay = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization!
        const weekDay:string = req.body
        const show = await getShowByWeekDayBusiness(weekDay,token)
        res.status(200).send(show)

    } catch (error) {
        res.status(400).send(error.message)
    }
}