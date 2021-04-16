import { Request, Response } from "express";
import connection, { tbRecipe } from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function editRecipe(req: Request,res: Response): Promise<void> {
   try {

      const { id,title, description}= req.body
      const token: string = req.headers.authorization!
      const tokenData: authenticationData | null = getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Unatuthorized")
      }

      if (!title && !description&& !id) {
         res.statusCode = 422
         throw new Error("Informe o(s) novo(s) 'title' ou 'description'")
      }

      await connection(tbRecipe)
         .update({ title, description })
         .where("user_id",tokenData.id)
         .where({ id })

      res.send({message: "Atualizado!"});

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({message: error.message})
      }
      res.send({message: error.message})
   }
}