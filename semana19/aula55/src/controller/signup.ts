import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { signupInput } from "../model/user";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {

      //é responsabilidade da controller. Está capturando os valores da
      //requisição
      const { name, nickname, email, password, role } = req.body as signupInput;

      //receber os valores que precisam ser enviados na resposta
      const token = await signupBusiness({ name, nickname, email, password, role });

      //enviar a resposta
      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}