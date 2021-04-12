import { Request, Response } from "express"
import connection, { tbUser } from "../connection"
import { loginUser } from "../data/loginUser"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { authenticationData, userCredentials } from "../types"

export const loginBusiness = async (auth:userCredentials): Promise<string> => {
   try {
      if (!auth.email || !auth.password) {
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      const user = await loginUser(auth)
      if (!user) {
         throw new Error("Não encontrado")
      }

      const hashCompare = await compare(auth.password, user.password)
      if (!hashCompare) {
         throw new Error("Senha Incorreta");
      }

      const token: string = generateToken({ id: user.id, role: user.role })

      return token
   } catch (error) {
      throw new Error( error.message || "Erro ao tentar logar")
   }
}