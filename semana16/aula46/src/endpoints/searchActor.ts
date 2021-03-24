import connection from "../connection"

export const searchActor = async (name: string) => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    // console.log(result[0][0])
    return result
}