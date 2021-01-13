
import React from 'react'
import { configAxios, urlBase } from '../parametros'
import axios from 'axios';
import ItemUsuario from './ItemUsuario';

export default class Usuario extends React.Component {

  state = {
    listaUsuarios: [],
    usuarioSelecionado: [],
  }
  componentDidMount = () => {
    this.pegaListaUsuarios()
  }

  pegaListaUsuarios = async () => {
    try {
      const resposta = await axios.get(urlBase, configAxios)
      this.setState({ listaUsuarios: resposta.data })

    } catch (erro) {
      console.log(erro.message)
    }
  }

  excluirUsuario = (usuario) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      axios
        .delete(urlBase + "/" + usuario.id, configAxios)
        .then((resposta) => {
          this.pegaListaUsuarios()
        })
        .catch((erro) => {
          console.log(erro.message)
        })
    }
  }

  selecionarUsuario = async (usuario) => {
    const resposta = await axios.get(urlBase + "/" + usuario.id, configAxios)
    try {
      console.log(resposta.data)
      this.setState({ usuarioSelecionado: resposta.data })
    }
    catch (erro) {
      console.log(erro.message)
    }
  }

  excluirUsuario = (usuario) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      axios
        .delete(urlBase + "/" + usuario.id, configAxios)
        .then((resposta) => {
          this.pegaListaUsuarios()
        })
        .catch((erro) => {
          console.log(erro.message)
        })
    }
  }

  

  render() {
    const renderListaUsuarios = this.state.listaUsuarios.map((usuario) => {
      return (
        <div>
          <li onClick={() => { this.selecionarUsuario(usuario) }}>{usuario.name}</li>
          {usuario.id === this.state.usuarioSelecionado.id ?
            <ItemUsuario usuarioSelecionado={this.state.usuarioSelecionado} onClick={() => { this.excluirUsuario(usuario) }} pegaListaUsuarios={this.pegaListaUsuarios}/> : false}
        </div>)
    })

    return (
      <div className="App">
        <h2>Lista de Usuarios Cadastrados</h2>
        <ul>
          {renderListaUsuarios}
        </ul>

      </div>
    )
  }
}