import connection from "../../connection"

export default async function selectAllUsersLimit(limit: number, offset: number): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      LIMIT ${limit}
      OFFSET ${offset};
   `)

   return result[0]
}