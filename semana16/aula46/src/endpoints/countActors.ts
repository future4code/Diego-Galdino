import connection from "../connection";

export const countActors = async (gender: string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    // console.log(result[0][0])
    return count
}