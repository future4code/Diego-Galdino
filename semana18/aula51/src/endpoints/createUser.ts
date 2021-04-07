import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";

export default async function createUser(req: Request,res: Response): Promise<void> {
   try {

      const { name, nickname, email, password, role } = req.body

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e 'role'")
      }

      if(role.toLowerCase() !== userRole.ADMIN && role.toLowerCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são normal e admin")
      }

      const [user] = await connection('to_do_list_users').where({ email })
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()
      const hashPassword = await hash(password)
      const newUser: user = { id, name, nickname, email,password:hashPassword,role }
      await connection('to_do_list_users').insert(newUser)
      const token: string = generateToken({ id, role})
      res.status(201).send({ token })

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}