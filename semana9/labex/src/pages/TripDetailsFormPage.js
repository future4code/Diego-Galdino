import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import FormTrip from "../components/FormTrip";
import { useProtectedPage } from "../hooks/useProtectedPage";
import planet from "../img/planet.png"
import { baseUrl } from "../parameters";

export const SectionDetail = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
background-color:#FF7448;
`
export const ArcticleDetail = styled.article`
width:70%;

padding:30px;

`
export const ArcticleImg = styled.article`
padding:30px;

width:30%;


`
export const ImgPlanet = styled.img`
margin-left:20%;
width:70%;
/* box-shadow:9px 9px 13px rgba(50, 50, 50, 0.77); */
border-radius:50%;

`

export default function TripDetailsFormPage(props) {

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

    const showList = listTrips.map((t) => {
        return (
            <div>
                <li onClick={() => getTripSelected(t)}>
                    <spam>Destino: {t.planet}</spam>
                    <spam>Viagem: {t.name}</spam>
                    <spam>{t.description}</spam>
                    <spam>Data: {t.date}</spam>
                    <spam>Duração: {t.durationInDays} dias</spam>

                </li>
                <FormTrip />
            </div>

        )
    })

    const getTripSelected = (trip) => {
        setTripSelected(trip)
    }

    return (
        <SectionDetail>
            {showList}

            {/* <ArcticleImg>
                <ImgPlanet src={planet} alt="" />
            </ArcticleImg>
            <ArcticleDetail>
                fdsfsd
                <p>{props.trip.t}</p>
            </ArcticleDetail> */}
        </SectionDetail>
    )
}