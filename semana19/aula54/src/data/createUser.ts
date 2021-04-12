
import connection, { tbUser } from "../connection";
import { user } from "../types";
export const createUser = async (userData:user ): Promise<void> => {
   try {
      await connection(tbUser).insert(userData)
   } catch (error) {
      throw new Error( error.sqlMessage || error.message)
   }
}