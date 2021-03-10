import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import useForm from "../hooks/useForm"
import { baseUrl } from "../parameters"
import { goTo } from "../routes/Coordinator"

export const SectionLogin = styled.section`
padding:20px;
margin:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
width:400px;
height:500px;

`
export const ButtonEnter = styled.button`
    width:100%;
    height:40px;
    color:#35302D;
    border:none;
    margin:10px;
    border:1px solid #FF7448;
    border-radius:4px;
    &:hover{
        background-color:#FF7448;
        color:#fff;
    }
`
export const DivError = styled.div`
    color:red;
`
export const PCreate = styled.span`
    color:#FF7448;
    cursor: pointer;
`
export const InputUser = styled.input`
    border:none;
    padding-left:10px;
    margin:10px;
    width:100%;
    height:30px;
    font-size:16px;
    border:1px solid #FF7448;
    border-radius:4px;
    box-sizing:border-box;
`

export default function CreateAccount() {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const [visible, setVisible] = useState(false)

    const history = useHistory();

    const createLogin = (event) => {
        event.preventDefault()

        axios
            .post(`${baseUrl}/signup`, form)
            .then((response) => {
                response.data.success ? alert("Sua conta foi cadastrada com sucesso"):alert("Sua conta não foi criada")
                goTo(history, "/LoginPage", "")


            })
            .catch(err => {
                console.log(err)

            })
        clear()
    }

    return (
        <SectionLogin>
            <h1>Criando uma consta</h1>
            <p>Preencha coms seus dados. Necessario o preenchimento de todos os campos</p>
            <form onSubmit={createLogin}>
                <InputUser
                    name="email"
                    type="text"
                    placeholder="Login"
                    value={form.email}
                    onChange={onChange}
                    title="Preencha seu email"
                    required
                />
                <InputUser
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    title="Preencha sua senha"
                    required
                />
                <ButtonEnter >Entrar</ButtonEnter>
            </form>
            {/* <DivError>{visible?erroMessage:false}</DivError> */}
            <p>Ao criar uma conta, você concorda com nossos <strong>Termos e Condições e Declaração de Privacidade</strong> </p>
        </SectionLogin>
    )
}