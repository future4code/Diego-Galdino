import { allUser } from "../data/allUsers"
import { getTokenData } from "../services/authenticator"
import { authenticationData } from "../types"

export const getAllUsersBusiness = async (token: string): Promise<any[]> => {
    try {
        const tokenData: authenticationData | null = getTokenData(token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        return await allUser()
    } catch (error) {
        throw new Error(error.message)
    }
}