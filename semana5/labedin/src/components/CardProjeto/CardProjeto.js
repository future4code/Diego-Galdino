import React from 'react';
import './CardProjeto.css'


function CardProjeto(props) {
    return (
        <li>
            <h2>{props.nome}</h2>
            <img src={props.imagem}/>
            <p className="projeto-descricao">{props.descricao}</p>
        </li>
    )
}

export default CardProjeto;