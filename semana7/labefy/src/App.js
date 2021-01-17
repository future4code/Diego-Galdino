import React from "react"
import './App.css';
import CadastroPlaylist from "./components/CadastroPlaylist";
import CadastroMusica from "./components/CadastroMusica";
import ListaPlaylist from "./components/ListaPlaylist";
import Logo1 from "./img/2.png"

export default class App extends React.Component {
  state = {
    visivel: "cadastro",
  }
  render() {
    return (
      <main>
        <header>
          <img src={Logo1} />
          <nav>
            <ul>
              <li onClick={()=>{this.setState({visivel:"cadastro"})}}><a>Cadastro de Musica</a></li>
              <li onClick={()=>{this.setState({visivel:"lista"})}}><a>Lista de Musica</a></li>
            </ul>
          </nav>
        </header>
        {
          this.state.visivel==="cadastro"?
        <div className="containerCadastro">
          <div className="containerCadastroPlayList">
            <CadastroPlaylist />

          </div>
          <div className="containerCadastroMusica">
            <CadastroMusica />

          </div>
        </div>
          :
          // this.setState({visivel:!this.state.visivel})
        <ListaPlaylist />
        }


      </main>
    )
  }

}


