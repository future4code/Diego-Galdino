import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, userPersonalInfo } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {

      const { name, nickname }: userPersonalInfo = req.body

      const tokenData: authenticationData | null = getTokenData(req.headers.authorization!)

      if(!tokenData){
         res.statusCode=401
         throw new Error("Unathorized");
      }

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}