import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()

// const myToken = jwt.sign(
//     {
//         name: "diego",
//         id: 123456
//     },
//     "fjhsdkfhgds87fsd678453d5908oiurety5",
//     {
//         expiresIn: "24d"
//     }
// )

export const generateToken = (payload: authenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {expiresIn:"24d"}
    )
}

export const getTokenData=(token:string):authenticationData|null=>{
    try {
        const {id} = jwt.verify(token, process.env.JWT_KEY!) as authenticationData
        return {id}
    } catch (error) {
        console.log(error.message)
        return null
    }
}