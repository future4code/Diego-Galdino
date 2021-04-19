import { Request, Response } from "express";
import { taskBusiness } from "../business/taskBusiness";

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      //recebeu os valores da req
      const { title, description, deadline, authorId } = req.body

      await taskBusiness({ title, description, deadline, authorId });
      //envia a resposta
      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}