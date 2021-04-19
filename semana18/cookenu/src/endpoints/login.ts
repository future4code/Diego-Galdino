import { Request, Response } from "express"
import connection, { tbUser } from "../connection"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { userCredentials } from "../types"

export const login = async (req: Request, res: Response): Promise<void> => {
   try {
      const { email, password }: userCredentials = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      const [user] = await connection(tbUser).where({ email })
      if (!user) {
         res.statusCode = 404
         throw new Error("Não encontrado")
      }

      const hashCompare = await compare(password, user.password)
      if (!hashCompare) {
         res.statusCode = 401;
         throw new Error("Senha Incorreta");
      }

      const token: string = generateToken({ id: user.id, role: user.role })
      res.send({ access_token: token })

   } catch (error) {

      if (res.statusCode == 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}