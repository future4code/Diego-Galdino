
import generateId from "../services/idGenerator";
import { Band, bandInput } from "../model/band";
import BandDatabase from "../data/BandDatabase";

const bandDatabase = new BandDatabase()

export async function createBandBusiness(input: bandInput): Promise<string> {
    try {
        if (!input.name || !input.genre || !input.responsible) {
            throw new Error('Preencha os campos "name", "genre" e "responsible"')
        }
        const id: string = generateId();
        await bandDatabase.insertBand(
            new Band(
                id,
                input.name,
                input.genre,
                input.responsible
            ))
        return id
        
    } catch (error) {
        throw new Error(error.message);
    }
}