import connection from "../connection";

export const newMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: number,
) => {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_Date: releaseDate,
        rating: rating,
      })
      .into("Movie");
  }