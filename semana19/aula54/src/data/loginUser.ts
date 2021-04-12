
import connection, { tbUser } from "../connection";
import {  userCredentials } from "../types";
export const loginUser = async (auth:userCredentials ): Promise<any> => {
   try {
     const user = await connection(tbUser).where("email",auth.email )
     return user[0]
   } catch (error) {
      throw new Error( error.sqlMessage || error.message)
   }
}