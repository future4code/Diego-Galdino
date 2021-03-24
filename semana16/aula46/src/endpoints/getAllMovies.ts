import { Request, Response } from "express";
import { allMovies } from "./allMovies";

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await allMovies()
        res.status(200).send({
            movies: movies,
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}