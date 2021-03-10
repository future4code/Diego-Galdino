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
    &:hover{border-bottom:1px solid}
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

export default function LoginPage() {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const [visible,setVisible]=useState(false)
    const erroMessage="Login ou senha incorretos"

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goTo(history, "/TripDetailsPage", "")
        }
    }, [history])

    const login = (event) => {
        event.preventDefault()

        axios
            .post(`${baseUrl}/login`, form)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                goTo(history, "/TripDetailsPage", "")
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
                setVisible(true)
            })
        clear()
    }

    return (
        <SectionLogin>
            <h1>Faça o login com seus dados</h1>
            <form onSubmit={login}>
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
            <DivError>{visible?erroMessage:false}</DivError>
            <p>Ao fazer login ou <PCreate onClick={()=>goTo(history,"/CreateAccount","")}>criar uma conta</PCreate>, você concorda com nossos <strong>Termos e Condições e Declaração de Privacidade</strong> </p>
        </SectionLogin>
    )
}