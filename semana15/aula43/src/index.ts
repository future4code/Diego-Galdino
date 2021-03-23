import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";


const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}
enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get("/users/search", (req: Request, res: Response) => {
    let arr: user[] = users
    const search =
        arr.filter((user) => {
            return user.name.includes(req.query.name as string)
        })
    if (search.length) { res.status(201).send(search); }
    else { res.status(404).send("Not Found"); }
})

app.get("/users/:type", (req: Request, res: Response) => {
    let arr: user[] = users
    let type = (req.params.type as string).toUpperCase()
    if (!(type in UserType)) {
        res.status(404).send("type not found")
    }
    const search =
        arr.filter((user) => {
            return user.type.includes(type)
        })
    if (search.length) { res.status(201).send(search); }
    else { res.status(404).send("Not Found"); }
})

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const reqBody: user = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.age ||
            !reqBody.email ||
            !reqBody.id ||
            !reqBody.name ||
            !reqBody.type) {
            errorCode = 422;
            throw new Error("Please check the fields.")
        }
        users.push(reqBody);
        res.status(201).send({ message: "User created successfully" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});

app.put("/users", (req: Request, res: Response) => {

    users.find(u => {
        u.id === users.length ? u.name = req.body.name as string + "-Alterado" : false
    })
    res.end()
})

app.patch("/users", (req: Request, res: Response) => {

    users.find(u => {
        u.id === users.length ? u.name = req.body.name as string + "-Realterado" : false
    })
    res.end()
})



app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. Please send a number");
        }

        const myUsers = users;

        const userIndex = myUsers.findIndex((u) => {
            return u.id === id;
        });

        if (userIndex < 0) {
            errorCode = 404;
            throw new Error("User not found");
        }

        users.splice(userIndex, 1);

        res.status(200).send("Delete OK");

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }

});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});