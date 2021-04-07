import connection from "../../connection"

export default async function selectAllUsersOrder(field:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${field};
    `)
 
    return result[0]
 }