import { Request, Response } from "express";
import { createPostBusiness } from "../business/createPostBusiness";
import { createPostInputDTO } from "../model/post";

export const createPost = async(req:Request,res:Response)=>{
    try {
        const token: string = req.headers.authorization!
        const {photo,description,type} = req.body as createPostInputDTO
        const id = await createPostBusiness({photo,description,type,token})
        res.status(201).send({ message: "Post realizado" ,id})
    } catch (error) {
        res.status(400).send(error.message)
    }
}