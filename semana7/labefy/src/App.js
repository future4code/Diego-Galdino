import React from "react"
import './App.css';
import CadastroPlaylist from "./components/CadastroPlaylist";
import CadastroMusica from "./components/CadastroMusica";
import ListaPlaylist from "./components/ListaPlaylist";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CadastroPlaylist />
        <hr></hr>
        <CadastroMusica />
        <hr></hr>
        <ListaPlaylist/>
      </div>
    )
  }

}


