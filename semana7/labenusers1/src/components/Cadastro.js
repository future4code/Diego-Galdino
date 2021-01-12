
import React from 'react'

export default class Cadastro extends React.Component {


    render() {
        return (
            <div className="App">
                <div>
                    <h2>Cadastro de Usuarios</h2>
                    <label>Usuario</label>
                    <input type="text" onChange={this.props.onChangeNome} value={this.props.nomeUsuario} />
                    <label>Email</label>
                    <input type="text" onChange={this.props.onChangeEmail} value={this.props.emailUsuario} />
                    <button onClick={this.props.criarUsuario}>Salvar</button>
                </div>
            </div>
        )
    }
}