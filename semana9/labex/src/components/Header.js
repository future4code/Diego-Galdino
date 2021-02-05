import logo from '../img/logo.png'
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { goTo } from '../routes/Coordinator'
import { useEffect, useState } from 'react'

export const AppHeader = styled.header`
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    width:100%;
    border-bottom:2px solid #FF7448;
`
export const LiHeader = styled.li`
    padding:10px 15px;
    list-style:none;
    display: inline;
    color:#35302D;
    cursor: pointer;
    &:hover{
        background-color:#FF7448;
        border-radius:5px;
        color:#fff
    }
`
export const UlHeader = styled.ul`
`

const Header = () => {
    const history = useHistory()
    const [visible,setVisible]=useState(false)


    const logoff = () => {
        localStorage.removeItem("token")
        setVisible(false)
        goTo(history, "/", "")
    }

    useEffect(()=>{
        setVisible(true)
        // showNewTrip()
    },[visible,localStorage.getItem("token")])

    // const showNewTrip = () => {
    //     console.log("token",localStorage.getItem("token"))
    //     if(localStorage.getItem("token")){
    //         return (
    //         <LiHeader onClick={() => { goTo(history, "/NewTrip", "") }}>Nova Viagem</LiHeader>
    //         <LiHeader onClick={() => { logoff() }}>Sair</LiHeader>
    //         )
    //     }
    // }

    return (
        <AppHeader>
            <img src={logo} alt="" />
            <UlHeader>
                <LiHeader onClick={() => { goTo(history, "/", "") }}>Viagens</LiHeader>

                <LiHeader onClick={() => { goTo(history, "/LoginPage", "") }}>Administração</LiHeader>
                {localStorage.getItem("token")?<LiHeader onClick={() => { goTo(history, "/NewTripPage", "") }}>Nova Viagem</LiHeader>:false}

                {localStorage.getItem("token")?<LiHeader onClick={() => { logoff() }}>Sair</LiHeader>:false}
                {/* {showNewTrip()} */}
            </UlHeader>

        </AppHeader>
    )
}

export default Header