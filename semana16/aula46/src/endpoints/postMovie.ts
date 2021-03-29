import { Request, Response } from "express";
import { newMovie } from "./newMovie";

export const postMovie = async (req: Request, res: Response) => {
    try {
        await newMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.releaseDate,
            req.body.rating
        )
        res.status(200).send({
            message: "Success"
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
}