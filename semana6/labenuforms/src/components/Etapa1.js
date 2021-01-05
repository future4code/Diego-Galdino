import React from "react";
export default class Etapa1 extends React.Component {
    render() {
        return (
            <div className="App">

                <h1>Etapa 1 - Dados Gerais</h1>
                <h3>1. Qual seu nome?</h3>
                <input type="text"></input>
                <h3>2. Qual sua idade?</h3>
                <input type="number"></input>
                <h3>3. Qual seu email?</h3>
                <input type="email"></input>
                <h3>4. Qual sua escolaridade?</h3>

                <select>
                    <option value="Medio incompleto">Ensino medio incompleto</option>
                    <option value="Medio completo">Ensino medio completo</option>
                    <option value="Superior incompleto">Ensino Superior incompleto</option>
                    <option value="Superior completo">Ensino Superior completo</option>
                </select>
            </div>
        );
    }
}