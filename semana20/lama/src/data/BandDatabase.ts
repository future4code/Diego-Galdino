import BaseDatabase from "./BaseDatabase"
import { Band } from "../model/band"

export default class BandDatabase extends BaseDatabase {

    public static bandTable = "Lama_bands"


    public selecBandByID = async (id: string): Promise<Band> => {
        try {
            const result = await BaseDatabase.connection(BandDatabase.bandTable).select("*").where(id)
            return new Band(
                result[0].id,
                result[0].name,
                result[0].music_genre,
                result[0].responsible
            )

        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    public insertBand = async (band: Band) => {
        try {
            await BaseDatabase.connection.insert({
                id: band.getId(),
                name: band.getName(),
                music_genre: band.getGenre(),
                responsible: band.getResponsible()
            }).into(BandDatabase.bandTable)
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }

    }

    // public insertUserFriend = async (userId: string, userFriendId: string) => {
    //     try {
    //         await BaseDatabase.connection.insert({
    //             user_id: userId,
    //             user_friend_id: userFriendId
    //         }).into(UserDatabase.userFriendTable)
    //     } catch (error) {
    //         throw new Error(error.slqMessage || error.message)
    //     }

    // }
    
    // public deleteUserFriend = async (userId: string, userFriendId: string) => {
    //     try {
    //         await BaseDatabase.connection(UserDatabase.userFriendTable)
    //             .delete().where({ user_id: userId })
    //             .and.where({ user_friend_id: userFriendId })
    //     } catch (error) {
    //         throw new Error(error.slqMessage || error.message)
    //     }

    // }
}