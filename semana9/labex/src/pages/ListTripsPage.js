import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { baseUrl } from "../parameters"

import { goTo } from "../routes/Coordinator"
import { useHistory } from "react-router-dom"
import { useGetRequestData } from "../hooks/useGetRequestData"


export const SectionTrips = styled.section`
    display:flex;
    margin:0 auto;
    width:70%;
    padding:20px;
`
export const ArticleTrip = styled.article`
    padding:30px;
    margin:20px;
    width: 30%;

    border: 1px solid #ccc;
    border-radius:5px;
    box-sizing:border-box;
    &:hover{ 
        background-color:rgb(255,116,72,1);
        color:#fff;
        cursor: pointer;
    }
`
export const DivPlanet = styled.div`
    width:40px;
    height:40px;
    border-radius:30px;
    border: 2px solid #fff;
    background-color:#FF7448;
    float:right;
`

export default function ListTripsPage() {
    const [listTrips, setlistTrips] = useState([])
    const [tripSelected, setTripSelected] = useState({})
    const history = useHistory()

    const getListTrips = () => {
        axios
            .get(`${baseUrl}/trips`)
            .then(response => { setlistTrips(response.data.trips) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => getListTrips(), [])



    const getTripSelected = (trip) => {
        setTripSelected(trip)
        goTo(history,"/ApplyTrip/",trip.id+"/"+trip.name+"/"+trip.planet)
    }

    // const getListTrips=useGetRequestData(`${baseUrl}/trips`,{})
    // setlistTrips(getListTrips.trips)

    const showList = listTrips.map((t) => {
        return (
            <ArticleTrip  onClick={()=>{getTripSelected(t)}} >
                <DivPlanet></DivPlanet>
                <p>Planeta: {t.planet}</p>
                <p>Viagem: {t.name}</p>
                <p>{t.description}</p>
                <p>Data: {t.date}</p>
                <p>Duração: {t.durationInDays} dias</p>
            </ArticleTrip>
        )
    })

    return (
        <SectionTrips>
            {showList}
        </SectionTrips>
    )
}