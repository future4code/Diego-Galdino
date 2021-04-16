import PostDatabase from "../data/PostDatabase";
import { authenticationData } from "../model/user";
import { getTokenData } from "../services/authenticator";

const postDatabase = new PostDatabase()

export const getPostByIdBusiness = async (id:string,token:string):Promise<any>=>{
    try {
        console.log(id,token)
        const tokenData: authenticationData | null = getTokenData(token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!id) {
            throw new Error("Preencha o campo 'id'")
        }

        const post = await postDatabase.getPostById(id)

        return post
        
    } catch (error) {
        throw new Error(error.message);
    }
}