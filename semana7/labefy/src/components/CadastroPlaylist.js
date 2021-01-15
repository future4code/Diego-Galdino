import React from "react"
import axios from "axios"
import { configAxios, urlBase } from "../Parametros"

export default class CadastroPlaylist extends React.Component {
  state = {
    nomePlayList: "",
    listaPlaylist: []
  }
  componentDidMount() {
    this.pegaListaPlayList()
  }
  pegaListaPlayList = () => {
    axios
      .get(urlBase, configAxios)
      .then((res) => {
        this.setState({ listaPlaylist: res.data.result.list })
      })
      .catch((erro) => console.log(erro));
  }

  cadastraPlayList = () => {

    if (this.state.nomePlayList !== "") {
      const body = {
        name: this.state.nomePlayList
      }
      axios
        .post(urlBase, body, configAxios)
        .then((res) => {
          alert("Playlist cadastrado com sucesso")
          this.setState({ nomePlayList: "" })
        })
        .catch((erro) => { alert("Digite um nome diferente") });
    } else {
      alert("Digite algum nome")
    }
  }
  render() {


    return (
      <div>
        <h2>Adicionar Play</h2>
        <p>Nome da Playlist</p>
        <input type="text" onChange={(e) => this.setState({ nomePlayList: e.target.value })} />
        <button onClick={() => this.cadastraPlayList(this.state.nomePlayList)}>Salvar</button>
      </div>
    )
  }

}

