import { Request, Response } from "express";
import connection, { userTableName } from "../connection";
import { generateToken } from "../services/authenticator";
import { userCredencials } from "../types";


export const login =async (req:Request,res:Response):Promise<void>=>{
    try {
        const {email, password} :userCredencials= req.body

        if(!email||!password){
            res.statusCode=422
            throw new Error("'email' e 'senha' são obrigatorios")
        }
        
        const [user] = await connection(userTableName).where({email})
        
        if(!user||user.password!==password){
            res.statusCode=401
            throw new Error("Credenciais invalidas")
        }

        const token:string = generateToken({id: user.id})
        res.send({token})

    } catch (error) {
        if(res.statusCode===200){
            res.status(500).send({message:"Internal server error"})
        }else{
            res.send({message:error.message})
        }
    }

}