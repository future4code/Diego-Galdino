import React, { useEffect, useState } from "react"
import axios from "axios"
import { ProfileHeader, ProfileDiv, ButtonList, SelectDiv, SelectButton, DescriptDiv, ContainerDiv, ImgProfile, ImgLogo, ImgHearts, ImgChoiceCancel, ImgChoiceAccept } from "./styled";
import { baseUrl, student } from "../parameters";
import logo from "../img/logo.png";
import hearts from "../img/hearts.png";
import cancel from "../img/cancel.png";
import accept from "../img/verified.png";



export default function Profile(props) {

    const [profile, setProfile] = useState({})
    const [choiceResponse, setchoiceResponse] = useState(false)

    const getNewProfile = () => {
        axios
            .get(`${baseUrl}${student}/person`)
            .then(response => { setProfile(response.data.profile) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => getNewProfile(), [])

    const postMatchProfile = (choiceSelected) => {
        const body = {
            id: profile.id,
            choice: choiceSelected,
        }
        axios
            .post(`${baseUrl}${student}/choose-person`, body)
            .then(response => { setchoiceResponse(response.data.isMatch) })
            .catch(err => { console.log(err) })
        getNewProfile()
    }

    return (
        <ProfileDiv>
            <ProfileHeader>
                <ImgLogo src={logo} />
                <ImgHearts src={hearts} onClick={() => { props.setPage(false) }} />
            </ProfileHeader>
            <ContainerDiv>
                <ImgProfile src={profile.photo} />
                <DescriptDiv>
                    <h3>{profile.name}, {profile.age}</h3>
                    <p>{profile.bio}</p>
                </DescriptDiv>
            </ContainerDiv>

            <SelectDiv>
                <ImgChoiceCancel src={cancel} onClick={() => { postMatchProfile(false) }} />
                <ImgChoiceAccept src={accept} onClick={() => { postMatchProfile(true) }} />
            </SelectDiv>
        </ProfileDiv>
    )
}


