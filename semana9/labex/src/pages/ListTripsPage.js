import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../parameters"
import planet from "../img/planet.png"

export default function ListTripsPage() {
    const [listTrips, setlistTrips] = useState([])

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
                <img src={planet} alt=""/>
                <p>{t.planet}</p>
                <p>{t.name}</p>
                <p>{t.description}</p>
                <p>{t.date}</p>
                <p>{t.durationInDays}</p>
            </div>
        )
    })

    return (
        <div>
            {showList}
        </div>
    )
}