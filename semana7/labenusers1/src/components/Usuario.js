
import React from 'react'

export default class Usuario extends React.Component {


  render(){
      return (
    <div className="App">
      <h2>Lista de Usuarios Cadastrados</h2>
        <ul>
          {this.props.renderListaUsuarios}
          
        </ul>

    </div>
  )
  }
}