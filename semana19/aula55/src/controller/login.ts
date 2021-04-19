import { Request, Response } from "express"
import { loginInput } from '../model/user'
import { loginBusiness } from "../business/loginBusiness"

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

      //é responsabilidade da controller, pois recebe do req
      const { email, password } = req.body as loginInput;

      //recebe o valor que precisa ser enviado como res
      const token: string = await loginBusiness({ email, password });

      //envia o valor de res
      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}