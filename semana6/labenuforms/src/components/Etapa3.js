import React from "react";

export default class Etapa3 extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Etapa 3 - Informações Gerais de Ensino </h1>
                <h3>5. Por que voce não terminou um curso de graduação?</h3>
                <input type="text"></input>
                <h3>6. Voce fez algum curso complementar?</h3>
                <select>
                    <option value="nenhum">Nenhum</option>
                    <option value="tecnico">Curso tecnico</option>
                    <option value="ingles">Ingles</option>
                </select>
            </div>
        );
    }
}