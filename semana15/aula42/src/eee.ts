import express, { Request, Response, response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();
app.use(express.json());
app.use(cors());



app.get('/countries/all', (req: Request, res: Response) => {

    res.status(201).send(countries);

});

app.get('/countries/search', (req: Request, res: Response) => {

    const country: string = req.query.country as string;
    const myCountries = countries;
    const filteredCountries = myCountries.filter((ct) => {
        return ct.name.includes(country);
    });

    if (filteredCountries.length) {
        res.status(201).send(filteredCountries);
    } else {
        res.status(404).send("Not Found");
    }

    console.log("iaeeee");

});
// /:id significa que vamos passar um path param cuja chave é id
app.get('/countries/:id', (req: Request, res: Response) => {

    //req.params é onde ficam os valores passados no path (o caminho da URL)
    const id: number = Number(req.params.id);

    /*iterando pelo array de países, até encontrar um que tenha id
    === ao que foi passado na url. Aqui a tipagem se mostra importante, porque o id
    de um país sempre é um número. */
    const country = countries.find((ct) => {
        return ct.id === id;
    });

    //envio o país encontrado
    res.status(200).send(country);

});

app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {



        const authorization = req.headers.authorization;
        if (!authorization) {
            errorCode = 401;
            throw new Error("Invalid authorization. Please fill the field");
        }

        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. Please send a number");
        }

        const myCountries = countries;

        const countryIndex = myCountries.findIndex((ct) => {
            return ct.id === id;
        });

        if (countryIndex < 0) {
            errorCode = 404;
            throw new Error("Country not found");
        }

        countries.splice(countryIndex, 1);

        res.status(200).send("PAIS APAGADO COM SUCESSO");

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }

});

app.listen(3003, () => {
    console.log("Servidor rodando no endereço http://localhost:3003");
});