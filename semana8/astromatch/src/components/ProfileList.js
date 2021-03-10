import axios from "axios"
import React, { useEffect, useState } from "react"
import { baseUrl, student } from "../parameters"
import { ProfileDiv, ProfileHeader, SmallImgProfile, SmallDivProfile, ImgLogo, ImgBack, DeleteDiv, ImgDelete } from "./styled"
import logo from "../img/logo.png";
import undo from "../img/undo.png";
import garbage from "../img/dustbin.png";


export default function ProfileList(props) {

    const [profileList, setProfileList] = useState([])

    const getNewProfileList = () => {
        axios
            .get(`${baseUrl}${student}/matches`)
            .then(response => { setProfileList(response.data.matches) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => getNewProfileList(),[])

    const putClearProfiles = () => {
        axios
            .put(`${baseUrl}${student}/clear`)
            .then(response => { })
            .catch(err => { console.log(err) })
        getNewProfileList()
    }

    const showList = profileList.map((p) => {
        return (
            <SmallDivProfile>
                <SmallImgProfile src={p.photo} alt="" />
                <spam>{p.name}</spam>
            </SmallDivProfile>
        )
    })

    return (
        <ProfileDiv>
            <ProfileHeader>
                <ImgLogo src={logo} />
                <ImgBack src={undo} onClick={() => { props.setPage(true) }} />
            </ProfileHeader>
            {showList}
            <DeleteDiv onClick={putClearProfiles}>
                <ImgDelete src={garbage} /><span>Excluir todos</span>
            </DeleteDiv>
        </ProfileDiv>
    )
}