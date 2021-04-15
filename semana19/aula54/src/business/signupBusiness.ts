import connection, { tbUser } from "../connection";
import { createUser } from "../data/createUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { convertStringToUserRole, signupInput, user, userRole } from "../types";

export const signupBusiness = async (input:signupInput): Promise<string> =>{
    try {

        if (!input.name || !input.email || !input.password || !input.role) {
           throw new Error("Preencha os campos 'name', 'password', 'email' e 'role'")
        }
        if(input.email.indexOf("@") === -1){
            throw new Error("Email invalido");
        }
        if (input.role.toUpperCase() !== userRole.ADMIN && input.role.toUpperCase() !== userRole.NORMAL) {
           throw new Error("Os valores possíveis para 'role' são normal e admin")
        }
        const [user] = await connection(tbUser).where("email", input.email)
        if (user) {
           throw new Error('Email já cadastrado')
        }

        const id: string = generateId()
        const hashPassword = await hash(input.password)
        const newUser: user = { id, name:input.name, email:input.email, password: hashPassword, role: convertStringToUserRole(input.role.toUpperCase()) }
        await createUser(newUser)
        const token: string = generateToken({ id, role:input.role })

        return token

    } catch (error) {
        throw new Error( error.message || "Erro criando o usuario")
    }
}