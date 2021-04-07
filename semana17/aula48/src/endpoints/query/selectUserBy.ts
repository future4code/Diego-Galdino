import connection from "../../connection"

export default async function selectUserByName(field:string,value:string):Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE ${field} LIKE "%${value}%" 
    `)
 
    return result[0]
 }