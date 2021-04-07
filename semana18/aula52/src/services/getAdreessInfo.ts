import axios from "axios"
import { addressInfo } from "../types"

const baseUrl: string = "https://viacep.com.br/ws"

export default async function getAddressInfo(cep: string): Promise<addressInfo | null> {
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json`)
        const { logradouro, bairro, localidade, uf }= response.data
        return {
            street: logradouro,
            neighbourhood: bairro,
            city: localidade,
            state: uf
        }
    } catch (error) {
        return null
    }
}