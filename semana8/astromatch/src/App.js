import Perfil from './components/Profile';
import './App.css';
import { AppDiv } from './components/styled';
import ProfileList from './components/ProfileList';
import { useState } from 'react';


export default function App() {
  const [page, setPage] = useState(true)
  const showPage=()=>{
    return(
      page===true?<Perfil  setPage={setPage} />:<ProfileList  setPage={setPage}/>
    )
  }
  return (
    <AppDiv>
      {showPage()}
    </AppDiv>
  );
}