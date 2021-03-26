import connection from "../../connection"

export const createTask = async( title: string,description:string,limitDate:Date,creatorUserId:number)=>{
    await connection
    .insert({
        title:title,
        description:description,
        limit_date:limitDate,
        creator_user_id:creatorUserId
    })
    .into("TodoListTask")
}