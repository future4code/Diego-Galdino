import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries, country } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res: Response) => {
    const arrIdName = countries.map((ct) => ({
        id: ct.id,
        name: ct.name
    }))
    res.status(201).send(arrIdName);
});

app.get('/countries/search', (req: Request, res: Response) => {
    let arr: country[] = countries

    const search =

        arr.filter((ct) => {
            return ct.name.includes(req.query.name as string)
        })
            .filter((ct) => {
                return ct.capital.includes(req.query.capital as string)
            })
            .filter((ct) => {
                return ct.continent.includes(req.query.continent as string)
            })

    if (search.length !== countries.length) { res.status(201).send(search); }
    else { res.status(404).send("Not Found"); }

});

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    console.log(id)
    
    const country = countries.find((ct) => {
        if (ct.id === id) {
            ct.name = req.body.name as string
            ct.capital = req.body.capital as string
        }
    })
    console.log(country)

    if (!country)
        res.status(200).send("Update ok");
    else
        res.status(400).send("Not found");

})

app.get("/countries/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const country = countries.find((ct) => {
        return ct.id === id;
    })

    if (country)
        res.status(200).send(country);
    else
        res.status(400).send("Not found");
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});