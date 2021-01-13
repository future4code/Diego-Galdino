import logo from './logo.svg';
import './App.css';
import React from 'react'
import Usuario from './components/Usuario';
import axios from 'axios';
import Cadastro from './components/Cadastro';

export default class App extends React.Component {

  state = {
  
    mostraLista: false,
   
  }

  render() {
    return (
      <div className="App">
        {this.state.mostraLista === false ?<Cadastro/>:<Usuario/>}
        <button onClick={() => this.setState({ mostraLista: !this.state.mostraLista })}>Lista de Usuarios</button>
      </div>
    )
  }
}