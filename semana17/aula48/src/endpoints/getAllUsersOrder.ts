import { Request, Response } from "express"
import selectAllUsersOrder from "./query/selectAllUsersOrder"

export const getAllUsersOrder = async(req: Request,res: Response): Promise<void> =>{
   try {
      let orderBy = req.query.orderby as string
      let users
      if(orderBy==="name"){
         users = await selectAllUsersOrder(orderBy)
      }
      if(orderBy==="type"){
         users = await selectAllUsersOrder(orderBy)
      }
      if(!orderBy){
         users = await selectAllUsersOrder("email")
      }

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}