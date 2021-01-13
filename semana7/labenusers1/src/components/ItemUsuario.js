
import React from 'react'
import { configAxios, urlBase } from '../parametros'
import axios from 'axios';

export default class ItemUsuario extends React.Component {
    state = {
        nomeAlterado: "",
        emailAlterado: ""
    }

    onChangeNomeAlterado = (e) => {
        this.setState({ nomeAlterado: e.target.value })
    }

    onChangeEmailAlterado = (e) => {
        this.setState({ emailAlterado: e.target.value })
    }
    alterarUsuario = (usuario) => {
        if (window.confirm("Tem certeza que deseja alterar este item?")) {
          const body = {
            name: this.state.nomeAlterado,
            email: this.state.emailAlterado
        }
          axios
            .put(urlBase + "/" + usuario.id, body,configAxios)
            .then((resposta) => {
              this.props.pegaListaUsuarios()
            })
            .catch((erro) => {
              console.log(erro.message)
            })
        }
      }
    render() {
        return (
            <div>
                <span> {this.props.usuarioSelecionado.name} </span>
                <span> {this.props.usuarioSelecionado.email} </span>
                <button onClick={this.props.onClick}>X</button>
                <button onClick={()=>this.alterarUsuario(this.props.usuarioSelecionado)}>Alterar</button>
                <div>
                    <input type="text" placeholder="Usuario" onChange={this.onChangeNomeAlterado} value={this.state.nomeAlterado} />
                    <input type="text" placeholder="email" onChange={this.onChangeEmailAlterado} value={this.state.emailAlterado} />
                </div>
            </div>
        )
    }
}