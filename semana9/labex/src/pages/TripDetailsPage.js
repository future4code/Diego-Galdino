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
`
export const DivListTrips = styled.div`
    display:flex;
    flex-wrap:wrap;
`
export const DivTrips = styled.div`
    margin:10px;
    width:${(props)=>props.width}%;
    padding:10px;
    border: 1px solid #ccc;
    border-radius:5px;
    box-sizing:border-box;
    &:hover{ 
        background-color:rgb(255,116,72,1);
        color:#fff;
        cursor: pointer;
    }

`
export const ImgPerson=styled.img`
width:30px;
float:right;
`
export const ImgOp=styled.img`
width:30px;
margin-right:10px;
border-radius:15px;
&:hover{
    background-color:#fff;
}
`
// export const ImgPerson=styled.img`
// width:30px;
// float:right;
// `

export default function TripDetailsPage() {
    
    const [listTrips, setlistTrips] = useState([])
    const [tripSelected, setTripSelected] = useState({})
    const [trip, setTrip] = useState([])
    const history = useHistory()
    const visible = false
    useProtectedPage()

    const getListTrips = () => {
        axios
            .get(`${baseUrl}/trips`)
            .then(response => { setlistTrips(response.data.trips) })
            .catch(err => { console.log(err) })
    }
   
    const getTripSelected = (trip) => {
        setTripSelected(trip)
        getTripDetail()
    }

    const getTripDetail = () => {

        axios
            .get(`${baseUrl}/trip/${tripSelected.id}`,
                {
                    headers: {
                        auth: localStorage.getItem("token")
                    }
                }
            )
            .then((res) => {
                setTrip(res.data.trip.candidates)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log("tip", trip, "sel", tripSelected)
    }
    useEffect(() => {
        getListTrips()
        getTripDetail()
    }, [tripSelected,trip])
    const showCandidate = trip.map((t) => {
        return (
            <DivTrips width={22}>
                <ImgPerson src={person} alt=""/>
                <p>Nome: {t.name}</p>
                <p>Idade: {t.age}</p>

                <ImgOp src={cancel}/>
                <ImgOp src={accept}/>
            </DivTrips>
        )
    })


    const showList = listTrips.map((t) => {
        return (
            <DivTrips width={30} onClick={() => { getTripSelected(t) }} >  
                <p>Planeta: {t.planet}</p>
                <p>Viagem: {t.name}</p>
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