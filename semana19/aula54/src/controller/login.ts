import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness"

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const auth = {
            email: req.body.email,
            password: req.body.password
        }
        const token = await loginBusiness(auth)
        res.send({ access_token: token })
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}