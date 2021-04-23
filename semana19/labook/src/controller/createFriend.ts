import { Request, Response } from "express"
import { createFriendBusiness } from "../business/createFriendBusiness"

export const createFriend = async(req:Request,res:Response)=>{
    try {
        const token: string = req.headers.authorization!
        const id = req.body.userFriendId as string
        await createFriendBusiness(token,id)
        res.status(200).send({ message:"Amizade realizada" })
    } catch (error) {
        res.status(400).send(error.message)
    }
}