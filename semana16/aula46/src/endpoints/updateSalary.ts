import connection from "../connection"

export const updateSalary = async (id: string, salary: number) => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}