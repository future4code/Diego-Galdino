import { Post } from "../model/post";
import BaseDatabase from "./BaseDatabase";


export default class PostDatabase extends BaseDatabase {

    public static tableName = "Labook_posts"

    public insertPost = async (post: Post) => {
        try {
            await BaseDatabase.connection.insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                author_id: post.getAuthorId()
            }).into(PostDatabase.tableName)
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    public getPostById = async (id: string): Promise<any> => {
        try {
            const post = await BaseDatabase.connection(PostDatabase.tableName).where("id", id)
            return post[0]
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}