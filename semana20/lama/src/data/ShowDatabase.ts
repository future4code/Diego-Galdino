
import { Show } from "../model/show";
import BaseDatabase from "./BaseDatabase";


export default class ShowDatabase extends BaseDatabase {

    public static tableName = "Lama_shows"

    public insertShow = async (show: Show) => {
        try {
            await BaseDatabase.connection.insert({
                id: show.getId(),
                week_day: show.getWeekDay(),
                start_time: show.getStartTime(),
                end_time: show.getEndTime(),
                band_id: show.getBandId()
            }).into(ShowDatabase.tableName)
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    public getShowByWeekDay = async (weekDay: string): Promise<any> => {
        try {
            const show = await BaseDatabase.connection(ShowDatabase.tableName).where("week_day", weekDay)
            return show[0]
        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}