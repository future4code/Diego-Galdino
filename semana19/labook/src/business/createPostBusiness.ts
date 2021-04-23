import PostDatabase from "../data/PostDatabase"
import { createPostInputDTO, Post } from "../model/post"
import { authenticationData } from "../model/user"
import { getTokenData } from "../services/authenticator"
import generateId from "../services/idGenerator"

const postDatabase = new PostDatabase()

export const createPostBusiness = async (input: createPostInputDTO): Promise<string> => {
    try {
        const tokenData: authenticationData | null = getTokenData(input.token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!input.description || !input.photo || !input.type) {
            throw new Error("Preencha os campos  'description', 'photo' e 'type' ")
        }

        const id: string = generateId()
        await postDatabase.insertPost(new Post(
            id,
            input.photo,
            input.description,
            input.type,
            tokenData.id
            ))
        return id
    } catch (error) {
        throw new Error(error.message);
    }

}