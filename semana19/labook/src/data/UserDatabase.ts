import BaseDatabase from "./BaseDatabase"
import { User } from "../model/user"

export default class UserDatabase extends BaseDatabase {

    public static userTable = "Labook_users"
    public static userFriendTable = "Labook_users_friends"

    public selectUserByEmail = async (email: string): Promise<User> => {
        try {
            const result = await BaseDatabase.connection(UserDatabase.userTable).select("*").where({ email })
            return new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )

        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    public insertUser = async (user: User) => {
        try {
            await BaseDatabase.connection.insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            }).into(UserDatabase.userTable)
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }

    }

    public insertUserFriend = async (userId: string, userFriendId: string) => {
        try {
            await BaseDatabase.connection.insert({
                user_id: userId,
                user_friend_id: userFriendId
            }).into(UserDatabase.userFriendTable)
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }

    }
    
    public deleteUserFriend = async (userId: string, userFriendId: string) => {
        try {
            await BaseDatabase.connection(UserDatabase.userFriendTable)
                .delete().where({ user_id: userId })
                .and.where({ user_friend_id: userFriendId })
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }

    }
}