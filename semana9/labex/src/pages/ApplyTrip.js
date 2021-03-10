import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { baseUrl } from "../parameters";
import { goTo } from "../routes/Coordinator";

export const SectionApply = styled.section`
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
    font-size:16px;

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
    box-sizing:border-box;
`

export default function ApplyTrip(props) {
    const pathParams = useParams()
    const history = useHistory()

    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const applyToTrip = (event) => {
        event.preventDefault()

        axios
            .post(`${baseUrl}/trips/${pathParams.id}/apply`, form)
            .then((response) => {
                alert("Pedido Realizado")
                goTo(history, "/", "")
            })
            .catch(err => console.log(err))

        clear()
    }

    return (
        <SectionApply>
            <h1>Você esta se candidatando para uma viagem "{pathParams.trip}" no planeta {pathParams.planet}</h1>

            <h3>Preencha com seus dados!</h3>
            <form onSubmit={applyToTrip}>
                <InputUser
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    required
                    title="Digite seu nome com no minimo 2 caracteres e apenas letras"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"}
                />
                <InputUser
                    name="age"
                    placeholder="Idade"
                    value={form.age}
                    onChange={onChange}
                    required
                    title="Somente pessoas maiores de 18 anos"
                    type="number"
                    min={18}

                />
                <InputUser
                    name="applicationText"
                    placeholder="Motivo"
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    title="Digite o motivo com no minimo 30 caracteres"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,!. 0-9]{30,}$"}

                />
                <InputUser
                    name="profession"
                    placeholder="Profissão"
                    value={form.profession}
                    onChange={onChange}
                    required
                    title=""
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{10,}$"}

                />
                <InputUser
                    name="country"
                    placeholder="Pais"
                    value={form.country}
                    onChange={onChange}
                    required
                    title="Digite o nome do Pais em que nasceu"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"}

                />
                <ButtonEnter>Enviar</ButtonEnter>
            </form>
        </SectionApply>
    )
}