import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authenticationData } from "../model/user"

dotenv.config()

export const generateToken = (payload: authenticationData): string => {
   return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "24d" })
}

export const getTokenData = (token: string): authenticationData | null => {
   try {
      const { id,userRole } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData
      return { id ,userRole}
   } catch (error) {
      console.log(error.message);
      return null
   }
}
