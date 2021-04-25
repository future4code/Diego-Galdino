import BandDatabase from "../data/BandDatabase";
import { authenticationData } from "../model/user";
import { getTokenData } from "../services/authenticator";

const bandDatabase = new BandDatabase()

export const getBandByIdBusiness = async (id:string,token:string):Promise<any>=>{
    try {
        const tokenData: authenticationData | null = getTokenData(token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!id) {
            throw new Error("Preencha o campo 'id'")
        }
        const band = await bandDatabase.selecBandByID(id)
        return band
        
    } catch (error) {
        throw new Error(error.message);
    }
}