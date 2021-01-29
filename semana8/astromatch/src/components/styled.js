import styled from "styled-components"
import texture from "../img/texture.jpg";

export const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#B0E0E6;
/* background-image:url(${texture}); */
`

export const ProfileDiv = styled.div`
  width: 400px;
  height: 550px;
  border: 3px solid #dedede;
  border-radius:10px;
  background-color:#fff;
  box-shadow: 0px 0px 15px 0px black;
`
export const ProfileHeader = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width:100%;


`

export const ImgLogo = styled.img`
width:40%;
`

export const ImgProfile = styled.img`
border-top:4px solid #EF5C6D;
border-bottom:2px solid #EF5C6D;
width: 400px;
height: 400px;


`

export const DescriptDiv = styled.div`
  width:100%;
  box-sizing:border-box;
  position: absolute;
  bottom:3px;
  padding-left:20px;
  color: #fff;
  text-shadow: 0px 0px 5px black;
  background: rgba(0, 0, 0, 0.2);
  &:hover{

    background: rgba(0, 0, 0, 0.5);
  }
`
export const ContainerDiv = styled.div`
  position: relative;
  display: inline-block;

`
export const SelectDiv = styled.div`

  display:flex;
  justify-content: space-around;
  align-items: center;
  height: 15%;
  bottom:0px;

`

export const ImgChoiceCancel = styled.img` 
width:50px;
&:hover{
  border-radius:40px;
  box-shadow: 0px 0px 10px #EF5C6D;
  background-color:#EF5C6D;
}
`
export const ImgChoiceAccept = styled.img` 
  width:50px;
  &:hover{
    border-radius:40px;
    box-shadow: 0px 0px 10px green;
    background-color:green;
  }
`

// -------------------------

export const ImgBack = styled.img` 
width:25px;
padding:5px;
&:hover{
  border-radius:15px;
  background-color:#dedede;
}
`
export const ImgHearts = styled.img` 
width:25px;
padding:5px;
&:hover{
  border-radius:15px;
  background-color:#dedede;
}
`

export const SmallImgProfile = styled.img`
width: 60px;
height: 60px;
margin:10px 20px 10px 0px;
border-radius:40px;
border: 3px solid #EF5C6D;
`

export const SmallDivProfile = styled.div`

  margin: 0 auto;
  display: flex;
  padding-left:20px;
  align-items: center;
  &:hover{
    box-shadow: inset 5px 0em #EF5C6D;

  background-color:#eee;

}
`

export const DeleteDiv = styled.div`
margin:0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
  width:50%;
  bottom:0px;
  &:hover{
  border-radius:5px;
  background-color:#dedede;

}
`
export const ImgDelete = styled.img` 
width:25px;
padding:10px;

`