import connection from "../connection";

export const avgSalary = async (gender: string) => {
    const result = await connection("Actor")
    .avg("salary as avg")
    .where({ gender });
    
    // console.log(result)
    return result[0].average;
}