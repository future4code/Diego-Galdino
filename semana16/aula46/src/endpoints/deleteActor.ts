import connection from "../connection"

export const deleteActor = async (id: string) => {
    await connection("Actor")
        .delete()
        .where("id", id)
}