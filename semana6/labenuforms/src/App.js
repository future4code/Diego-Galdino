import React from "react";
import './App.css';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export default class App extends React.Component {
  state = {
    etapa: 1,
  }
  renderizarEtapa = () => {
    console.log(this.state.etapa)
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return null
    }
  }
  irParaProximaEtapa = () => {
    if (this.state.etapa < 4) {
      let contador = this.state.etapa + 1
      this.setState({ etapa: contador })
    }
  }
  voltarParaEtapaAnterior = () => {
    if (this.state.etapa > 1) {
      let contador = this.state.etapa - 1
      this.setState({ etapa: contador })
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderizarEtapa()}
        {this.state.etapa!==4?
        <button onClick={this.irParaProximaEtapa}>Proxima Etapa</button>        
        :false}
        
        <button onClick={this.voltarParaEtapaAnterior}>Etapa Anterior</button>
      </div>
    );
  }
}


