import connection from "../connection";

export const allMovies = async () => {
    const result = await connection("Movie").limit(15)
    // connection.raw(`
    //   SELECT * FROM Movie LIMIT 15
    // `);
  
    return result
  };