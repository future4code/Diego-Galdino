import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { baseUrl } from "../parameters"
import { useProtectedPage } from "../hooks/useProtectedPage"
import person from "../img/person.png"
import cancel from "../img/cancel.png"
import accept from "../img/verified.png"

export const SectionTrips = styled.section`

    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:60%;
    padding:20px;
    box-sizing:border-box;
    @media(max-width: 600px) {
        width:100%
        }

`
export const DivListTrips = styled.div`
    display:flex;
    flex-wrap:wrap;

`
export const DivTrips = styled.div`
    margin:10px;
    width:${(props) => props.width}%;
    padding:10px;
    border: 1px solid #ccc;
    border-radius:5px;
    box-sizing:border-box;
    &:hover{ 
        background-color:rgb(255,116,72,1);
        color:#fff;
        cursor: pointer;
    }
    @media(max-width: 600px) {
    width:40%}

`
export const ImgPerson = styled.img`
width:30px;
float:right;
`
export const ImgOp = styled.img`
width:30px;
margin-right:10px;
border-radius:15px;
float:${(props) => props.float};
&:hover{
    background-color:#fff;
}
`

export default function TripDetailsPage() {

    const [count, setCount] = useState(0)
    const [listTrips, setlistTrips] = useState([])
    const [tripSelected, setTripSelected] = useState({})

    const [listCandidates, setListCandidates] = useState([])

    const history = useHistory()

    useProtectedPage()

    useEffect(() => {
        getListTrips()
    }, [listTrips,listCandidates])

    const getListTrips = () => {
        axios
            .get(`${baseUrl}/trips`)
            .then(response => { setlistTrips(response.data.trips) })
            .catch(err => { console.log(err) })
    }
    const deleteTripDetail = (trip) => {
        if(window.confirm("Tem certeza que deseja excluir esta viagem?")){
            axios
                .delete(`${baseUrl}/trips/${trip.id}`)
                .then(response => {  })
                .catch(err => { console.log(err) })
        }
    }

    const getTripDetail = (trip) => {
        setTripSelected(trip)
        axios
            .get(`${baseUrl}/trip/${trip.id}`,
                {
                    headers: {
                        auth: localStorage.getItem("token")
                    }
                }
            )
            .then((res) => {
                setListCandidates(res.data.trip.candidates)
            })
            .catch((err) => {console.log(err)})
    }

    const putDecideCandidate = (candidate, decision) => {
        const body = {
            approve: decision
        }
        axios
            .put(`${baseUrl}/trips/${tripSelected.id}/candidates/${candidate.id}/decide`, body,
                {
                    headers: {
                        auth: localStorage.getItem("token")
                    }
                })
            .then(response => { alert(response.data.success ? candidate.name + " foi aprovado" : candidate.name + " foi reprovado") })
            .catch(err => { console.log(err) })
    }

    const showList = listTrips.map((t) => {
        return (
            <DivTrips width={30} onClick={() => { getTripDetail(t) }} >
                <ImgOp src={cancel} float={"right"} onClick={() => { deleteTripDetail(t) }} />
                <p>Planeta: {t.planet}</p>
                <p>Viagem: {t.name}</p>
            </DivTrips>
        )
    })

    const showCandidate = listCandidates.map((c) => {
        return (
            <DivTrips width={22} >
                <ImgPerson src={person} alt="" />
                <p>Nome: {c.name}</p>
                <p>Idade: {c.age}</p>
                <p>Profissao: {c.profession}</p>
                <p>{c.country}</p>

                <ImgOp src={cancel} float={"none"} onClick={() => { putDecideCandidate(c, false) }} />
                <ImgOp src={accept} float={"none"} onClick={() => { putDecideCandidate(c, true) }} />
            </DivTrips>
        )
    })


    return (
        <SectionTrips >
            <h1>Lista de viagens cadastradas</h1>
            <p>Clique em uma viagem para saber os respectivos candidatos: </p>
            <DivListTrips>
                {showList}
            </DivListTrips>
            <p>Lista de candidatos cadastrados para a viagem :<strong> {tripSelected.name} </strong></p>
            <DivListTrips>
                {showCandidate}
            </DivListTrips>
        </SectionTrips>

    )
}