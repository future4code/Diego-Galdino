import { Request, Response } from "express";
import connection, { tbRecipe } from "../connection";
import {  getTokenData } from "../services/authenticator";
import { authenticationData} from "../types";

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
   try {
      const token: string = req.headers.authorization!
      const tokenData: authenticationData | null = getTokenData(token)

      if (!tokenData) {
         res.statusCode = 401
         throw new Error("Unatuthorized")
      }

      const { title, description} = req.body

      if (!title || !description) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'title', 'created' e 'description' ")
      }
      const dateTime = Date.now()
      const date= new Date(dateTime)
      const recipe = { title, description, created:`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`, user_id: tokenData.id }
      await connection(tbRecipe).insert(recipe)

      res.status(201).send({ message: "Receita cadastrada" })

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}