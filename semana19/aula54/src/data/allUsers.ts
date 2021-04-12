import connection, { tbUser } from "../connection"

export const allUser = async (): Promise<any[]> => {
    try {
        const user = await connection(tbUser)
        return user
    }catch(error){
        throw new Error( error.sqlMessage || error.message)
    }
}