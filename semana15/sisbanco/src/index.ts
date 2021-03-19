import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";


const app: Express = express();

app.use(express.json());
app.use(cors());

type conta = {
    cpf: number,
    nome: string,
    dataNasc: string,
    saldo: number,
    extrato: operacao[]
}

type operacao = {
    data: string,
    desc: string,
    valor: number
}

let contasCadastradas: conta[] = [
    {
        cpf: 33322211145,
        nome: "Diego",
        dataNasc: "11-11-1991",
        saldo: 300,
        extrato: [{
            data: "12-12-2020",
            desc: "conta de luz",
            valor: 155
        }]
    },
    {
        cpf: 22211144456,
        nome: "Rodrigo",
        dataNasc: "20-11-1989",
        saldo: 300,
        extrato: [{
            data: "02-05-2020",
            desc: "conta de agua",
            valor: 155
        }]
    },
]

app.get("/contas", (req: Request, res: Response) => {
    res.status(200).send(contasCadastradas)
})

app.get("/contas/saldo/:cpf", (req: Request, res: Response) => {
    let codigoErro: number = 400;
    try {
        const contaSelecionada = contasCadastradas.find((c) => {
            return c.cpf === Number(req.params.cpf)
        })
        if (contaSelecionada) {
            res.status(200).send({ saldo: contaSelecionada.saldo })
        } else {
            codigoErro = 400;
            throw new Error("CPF exitente")
        }

    } catch (error) {
        res.status(codigoErro).send({ message: error.message });
    }
})

app.post("/contas", (req: Request, res: Response) => {
    let codigoErro: number = 400;
    const { cpf, nome, dataNasc } = req.body
    let dt = dataNasc.replace(/\//g, "-");
    const data_array = dt.split("-");
    let dts: string = ""
    try {
        contasCadastradas.find((c) => {
            if (c.cpf === cpf) {
                codigoErro = 400;
                throw new Error("CPF exitente")
            }
        })
        if (data_array[0].length != 4) {
            dts = data_array[2] + "-" + data_array[1] + "-" + data_array[0];
        }

        const hoje = new Date();
        const nasc = new Date(dts);
        let idade = hoje.getFullYear() - nasc.getFullYear();
        const m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

        if (idade < 18) {
            codigoErro = 400;
            throw new Error("Idade invalida.")
        }
        const reqConta: conta = {
            cpf: cpf,
            nome: nome,
            dataNasc: dataNasc,
            saldo: 0,
            extrato: []
        };
        if (!cpf || !nome || !dataNasc) {
            codigoErro = 422;
            throw new Error("Por favor confira os campos.")
        }

        contasCadastradas.push(reqConta);
        res.status(201).send({ message: "Conta cadastrada com sucesso" })
    } catch (error) {
        res.status(codigoErro).send({ message: error.message });
    }
});

app.put("/contas/saldo", (req: Request, res: Response) => {
    let codigoErro: number = 400;
    const hoje = new Date();
    try {
        const contaSelecionada = contasCadastradas.find((c) => {
            if (c.cpf === Number(req.body.cpf) && c.nome === (req.body.nome)){
                c.saldo = c.saldo + Number(req.body.valor)
                c.extrato.push({
                    data: (hoje.getDay()<10&&"0"+hoje.getDay())+"-"+(hoje.getMonth()<10&&"0"+hoje.getMonth())+"-"+hoje.getFullYear(),
                    desc: "deposito em dinheiro",
                    valor: req.body.valor
                })
            }
        })
        if (contaSelecionada) {
            codigoErro = 400;
            throw new Error("CPF ou nome incorretos ")
        }
        res.end()
    } catch (error) {
        res.status(codigoErro).send({ message: error.message });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});