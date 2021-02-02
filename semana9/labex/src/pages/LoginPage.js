import styled from "styled-components"

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
        color:#fff
    }
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
`

export default function LoginPage() {

    return (
        <SectionLogin>
            <h3>Faça o login</h3>
            <InputUser type="text" placeholder="Login"></InputUser>
            <InputUser type="password" placeholder="Senha"></InputUser>
            <ButtonEnter>Entrar</ButtonEnter>
            <p>Ao fazer login ou criar uma conta, você concorda com nossos <strong>Termos e Condições e Declaração de Privacidade</strong> </p>
        </SectionLogin>
    )
}