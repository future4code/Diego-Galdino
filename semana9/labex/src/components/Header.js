import logo from '../img/logo.png'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import { goTo } from '../routes/Coordinator'

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
    return (
        <AppHeader>
            <img src={logo} alt="" />
            <UlHeader>
                <LiHeader onClick={()=>{goTo(history,"/")}}>Home</LiHeader>
                <LiHeader onClick={()=>{goTo(history,"/ListTripsPage")}}>Viagens</LiHeader>
                <LiHeader onClick={()=>{goTo(history,"/LoginPage")}}>ADM</LiHeader>
            </UlHeader>

        </AppHeader>
    )
}

export default Header