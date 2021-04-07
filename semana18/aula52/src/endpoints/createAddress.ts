import { Request, Response } from "express";
import connection from "../connection";
import { generateToken, getTokenData } from "../services/authenticator";
import getAddressInfo from "../services/getAdreessInfo";
import { hash } from "../services/hashManager";
import { addressInfo, authenticationData, userRole } from "../types";

export default async function createAddress(req: Request, res: Response): Promise<void> {
    try {

        const { cep, number, complement, role } = req.body

        const tk: string = req.headers.authorization!
        const tokenData: authenticationData | null = getTokenData(tk)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unatuthorized")
        }

        if (!cep || !number || !role) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'cep','number' e 'role'")
        }

        if (role.toLowerCase() !== userRole.ADMIN && role.toLowerCase() !== userRole.NORMAL) {
            res.statusCode = 422
            throw new Error("Os valores possíveis para 'role' são normal e admin")
        }

        const { street, neighbourhood, city, state }:any= await getAddressInfo(cep)

        if (!street || !neighbourhood || !city ||!state) {
            res.statusCode = 401
            throw new Error("CEP não encontrado")
        }
        const newAddress = { cep, street, number, neighbourhood, complement, city, state, user_id: tokenData.id }
        await connection('to_do_list_adress').insert(newAddress)
        res.status(201).send({ message: "Endereço adicionado" })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}