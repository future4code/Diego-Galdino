
import ShowDatabase from "../data/ShowDatabase";
import { authenticationData } from "../model/user";
import { getTokenData } from "../services/authenticator";

const showDatabase = new ShowDatabase()

export const getShowByWeekDayBusiness = async (weekDay:string,token:string):Promise<any>=>{
    try {
        const tokenData: authenticationData | null = getTokenData(token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!weekDay) {
            throw new Error("Preencha o campo 'weekDay'")
        }
        const show = await showDatabase.getShowByWeekDay(weekDay)
        return show
        
    } catch (error) {
        throw new Error(error.message);
    }
}