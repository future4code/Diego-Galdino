import { signupInput, User } from "../model/user";
import generateId from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import UserDatabase from "../data/UserDatabase";




const userDatabase = new UserDatabase()

export async function signupBusiness(input: signupInput): Promise<string> {
    try {
        if (!input.name || !input.email || !input.password || !input.userRole) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }
        const id: string = generateId();
        const hm = new HashManager();
        const cypherPassword = await hm.hash(input.password);
        await userDatabase.insertUser(
            new User(
                id,
                input.name,
                input.email,
                cypherPassword,
                input.userRole
            ))

        const token: string = generateToken({id,userRole:input.userRole})

        return token
        
    } catch (error) {
        throw new Error(error.message);
    }
}