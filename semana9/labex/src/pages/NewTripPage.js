import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { useInput } from "../hooks/useInput";
import { useProtectedPage } from "../hooks/useProtectedPage";
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
// Balada mais loca e longe que voces ja foram
export default function NewTripPage(props) {
    const pathParams = useParams()
    const history = useHistory();
    useProtectedPage()
    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });
    const createTrip = (event) => {
        event.preventDefault();
        console.log(form)
        
        axios
        .post(`${baseUrl}/trips`, form,
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
                alert("Novo destino criado")
                goTo(history, "/TripDetailsPage", "")
            })
            .catch(err => console.log(err))

        clear()
    }

    return (
        <SectionApply>
            
            <h3>Preencha com os dados da nova viagem!</h3>
            <p>Em todos campos o preenchimento é obrigatorio.</p>
            <form onSubmit={createTrip}>
                <InputUser
                    name="name"
                    placeholder="Viagem"
                    value={form.name}
                    onChange={onChange}
                    required
                    title="Digite seu nome com no minimo 5 caracteres e apenas letras"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}$"}
                />
                <InputUser
                    name="planet"
                    placeholder="Planeta"
                    value={form.planet}
                    onChange={onChange}
                    required
                    title="Digite seu nome com no minimo 5 caracteres e apenas letras"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]{5,}$"}

                />
                <InputUser
                    name="date"
                    placeholder="dd/mm/aaaa"
                    value={form.date}
                    onChange={onChange}
                    required

                    title=""
                    pattern={"^[0-3][0-9]/[0-3][0-9]/(?:[0-9][0-9])?[0-9][0-9]$"}

                />
                <InputUser
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    required
                    title="Minimo 30 caracteres"
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,!. 0-9]{30,}$"}

                />
                <InputUser
                    name="durationInDays"
                    placeholder="Dias"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    title="Minimo 50 dias"
                    type="number"
                    min={50}

                />
                <ButtonEnter>Enviar</ButtonEnter>
            </form>
        </SectionApply>
    )
}