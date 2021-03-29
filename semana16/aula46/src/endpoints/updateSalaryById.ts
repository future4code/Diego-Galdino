import { Request, Response } from "express";
import { updateSalary } from "./updateSalary";

export const updateSalaryById= async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary);
        res.status(200).send({
        message: "Success",
      });
    } catch (err) {
        res.status(400).send({
        message: err.message,
      })
    }
  }