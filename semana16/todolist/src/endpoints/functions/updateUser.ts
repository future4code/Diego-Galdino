import connection from "../../connection"


export const updateUser = async (id: number, name: string, nickname:string) => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)
}