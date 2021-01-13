
import React from 'react'
import { configAxios, urlBase } from '../parametros'
import axios from 'axios';

export default class Cadastro extends React.Component {

    state = {
        nomeUsuario: "",
        emailUsuario: "",
    }

    onChangeNome = (e) => {
        this.setState({ nomeUsuario: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ emailUsuario: e.target.value })
    }

    criarUsuario = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }
        axios
            .post(urlBase,body,configAxios)
            .then((resposta) => {
                alert("Usuario " + this.state.nomeUsuario + " foi crido com sucesso!")
                this.setState({ nomeUsuario: "",emailUsuario: ""  })
                
            })
            .catch((erro) => {
                alert("Digite um email valido")
                console.log(erro.message)
            })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Cadastro de Usuarios</h2>
                    <label>Usuario</label>
                    <input type="text" onChange={this.onChangeNome} value={this.state.nomeUsuario} />
                    <label>Email</label>
                    <input type="text" onChange={this.onChangeEmail} value={this.state.emailUsuario} />
                    <button onClick={this.criarUsuario}>Salvar</button>
                </div>
            </div>
        )
    }
}