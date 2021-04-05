import { Request, Response } from "express";
import connection, { userTableName } from "../connection";
import { generateId } from "../services/generateId";
import { user } from "../types";
import {generateToken}from "../services/authenticator"

export default async function createUser(req: Request,res: Response): Promise<void> {
   
   try {
      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection(userTableName).where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()
      const newUser: user = { id, name, nickname, email, password }

      await connection(userTableName).insert(newUser)

      const token:string = generateToken({id})

      res.status(201).send({ newUser, token})

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}