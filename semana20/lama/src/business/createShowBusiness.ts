
import ShowDatabase from "../data/ShowDatabase"
import { createShowInputDTO, Show } from "../model/show"
import { authenticationData } from "../model/user"
import { getTokenData } from "../services/authenticator"
import generateId from "../services/idGenerator"

const showDatabase = new ShowDatabase()

export const createShowBusiness = async (input: createShowInputDTO): Promise<string> => {
    try {
        const tokenData: authenticationData | null = getTokenData(input.token)
        if (!tokenData) {
            throw new Error("Unatuthorized")
        }
        if (!input.weekDay || !input.startTime || !input.endTime|| !input.bandId) {
            throw new Error("Preencha os campos  'weekDay', 'startTime' e 'endTime' ")
        }

        const id: string = generateId()
        await showDatabase.insertShow(new Show(
            id,
            input.weekDay,
            input.startTime,
            input.endTime,
            input.bandId
            ))
        return id
    } catch (error) {
        throw new Error(error.message);
    }

}