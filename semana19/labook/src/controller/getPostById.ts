import { Request, Response } from "express";
import { getPostByIdBusiness } from "../business/getPostByIdBusiness";

export const getPostById = async (req: Request, res: Response) => {
    try {
        const token: string = req.headers.authorization!
        const id:string = req.params.id
        const post = await getPostByIdBusiness(id,token)
        res.status(200).send(post)

    } catch (error) {
        res.status(400).send(error.message)
    }
}