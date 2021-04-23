import { Request, Response } from "express"
import { deleteFriendBusiness } from "../business/deleteFriendBusiness"


export const deleteFriend = async(req:Request,res:Response)=>{
    try {
        const token: string = req.headers.authorization!
        const id = req.body.userFriendId as string
        await deleteFriendBusiness(token,id)
        res.status(200).send({ message:"Amizade desfeita" })
    } catch (error) {
        res.status(400).send(error.message)
    }
}