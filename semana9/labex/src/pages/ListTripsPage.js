import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { baseUrl } from "../parameters"
import { goTo } from "../routes/Coordinator"
import { useHistory } from "react-router-dom"
import space from "../img/space.jpg";


export const H1Title = styled.h1`
text-align:center;
`
export const SectionTrips = styled.section`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:0 auto;
    width:90%;
    padding:20px;
    box-sizing:border-box;
    @media(max-width: 600px) {
    flex-direction: column;}

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
    @media(max-width: 600px) {
        width: 100%;
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
        goTo(history, "/ApplyTrip/", trip.id + "/" + trip.name + "/" + trip.planet)
    }

    const showList = listTrips.map((t) => {
        return (
            <ArticleTrip onClick={() => { getTripSelected(t) }} >
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
        <div >
            <H1Title>Candidate-se em algumas de nossas viagens</H1Title>
            {/* <SectionImg>

            <img src={space}></img>
            </SectionImg> */}
            <SectionTrips>
                {showList}
            </SectionTrips>
        </div>

    )
}