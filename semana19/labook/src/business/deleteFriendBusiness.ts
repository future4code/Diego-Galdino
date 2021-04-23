import UserDatabase from "../data/UserDatabase"
import { authenticationData } from "../model/user"
import { getTokenData } from "../services/authenticator"

const userDatabase = new UserDatabase()

export const deleteFriendBusiness = async (token:string, userFriendId:string): Promise<void> => {
    try {
        const tokenData: authenticationData | null = getTokenData(token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!userFriendId) {
            throw new Error("Preencha os campos  'userFriendId' ")
        }
        await userDatabase.deleteUserFriend(tokenData.id,userFriendId)
    } catch (error) {
        throw new Error(error.message);
    }

}