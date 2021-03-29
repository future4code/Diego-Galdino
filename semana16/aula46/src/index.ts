
import app from "./app";
import { getActorById } from "./endpoints/getActorById";
import { getCountActorByGender } from "./endpoints/getCountActorByGender";
import {updateSalaryById} from "./endpoints/updateSalaryById"
import { deleteActorById } from "./endpoints/deleteActorById";
import { postMovie } from "./endpoints/postMovie";
import { getAllMovies } from "./endpoints/getAllMovies";
import { getMovieSearch } from "./endpoints/getMovieSearch";


app.get("/actor", getCountActorByGender)
app.get("/movie", getAllMovies)
app.get("/movie/search",getMovieSearch)
app.get("/actor/:id", getActorById)
app.post("/actor",updateSalaryById)
app.post("/movie",postMovie)
app.delete("/actor/:id",deleteActorById)