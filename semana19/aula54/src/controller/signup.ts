import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";

export const signup = async (req: Request, res: Response): Promise<void> => {

    try {
        const input = {
            email:      req.body.email,
            name:       req.body.name,
            password:   req.body.password,
            role:       req.body.role
        }
        const token = await signupBusiness(input)
        res.status(200).send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}