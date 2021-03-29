import { Request, Response } from "express"
import selectAllUsersLimit from "./query/selectAllUsersLimit";


export const getAllUsersLimit = async(req: Request,res: Response): Promise<void> =>{
   try {
      let page = req.query.page as string
      const limit = 5;
      const offset = limit *( Number(page)-1);

      const users = await selectAllUsersLimit(limit,offset)

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