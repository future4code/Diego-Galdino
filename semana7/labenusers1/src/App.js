import logo from './logo.svg';
import './App.css';
import React from 'react'
import Usuario from './components/Usuario';
import axios from 'axios';
import Cadastro from './components/Cadastro';

export default class App extends React.Component {

  state = {
    listaUsuarios: [],
    mostraLista: false,
    nomeUsuario: "",
    emailUsuario: ""
  }

  onChangeNome = (e) => {
    this.setState({ nomeUsuario: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ emailUsuario: e.target.value })
  }

  componentDidMount = () => {
    this.pegaListaUsuarios()
  }

  pegaListaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "diego-galdino-epps"
          }
        }
      )
      .then((resposta) => {
        this.setState({ listaUsuarios: resposta.data })
      })
      .catch((erro) => {
        console.log(erro.message)
      })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "diego-galdino-epps",
          }
        }
      )
      .then((resposta) => {
        alert("Usuario "+this.state.nomeUsuario+" foi crido com sucesso!")
        this.setState({ nomeUsuario: "" })
        this.setState({ emailUsuario: "" })
        this.pegaListaUsuarios()
      })
      .catch((erro) => {
        alert("Digite um email valido")
        console.log(erro.message)
      })
  }

  excluirUsuario = (usuario) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/` + usuario.id,
          {
            headers: {
              Authorization: "diego-galdino-epps",
            }
          }
        )
        .then((resposta) => {
          this.pegaListaUsuarios()
        })
        .catch((erro) => {
          console.log(erro.message)
        })
    }
  }
  selecionarUsuario = (usuario) => {
    let usuarioSelecionado
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/` + usuario.id,
        {
          headers: {
            Authorization: "diego-galdino-epps",
          }
        }
      )
      .then((resposta) => {
        usuarioSelecionado = resposta.data
        this.pegaListaUsuarios()
      })
      .catch((erro) => {
        console.log(erro.message)
      })
    return usuarioSelecionado
  }

  render() {
    const renderListaUsuarios = this.state.listaUsuarios.map((usuario) => {
      return <li>{usuario.name}<button onClick={() => { this.excluirUsuario(usuario) }}>X</button></li>
    })

    return (
      <div className="App">
        {this.state.mostraLista === false ?
        // <Cadastro 
        // onChangeNome={this.onChangeNome}
        // valueNomeUsuario={this.state.nomeUsuario}
        // onChangeEmail={this.onChangeEmail}
        // valueEmailUsuario={this.state.emailUsuario}
        // onClickCriarUsuario={this.criarUsuario}
        // />
          <div>
            <h2>Cadastro de Usuarios</h2>
            <label>Usuario</label>
            <input type="text" onChange={this.onChangeNome} value={this.state.nomeUsuario} />
            <label>Email</label>
            <input type="text" onChange={this.onChangeEmail} value={this.state.emailUsuario} />
            <button onClick={this.criarUsuario}>Salvar</button>
          </div>
          :
          <Usuario renderListaUsuarios={renderListaUsuarios} />
        }

        <button onClick={() => this.setState({ mostraLista: !this.state.mostraLista })}>Lista de Usuarios</button>


      </div>
    )
  }
}