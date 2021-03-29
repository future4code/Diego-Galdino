import connection from "../connection"

export const searchMovie = async (query: string) => {
    const result = await connection.raw(`
        SELECT * FROM Movie WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
    `)
    // console.log(result[0][0])
    return result[0]
}