import React from "react"
import axios from "axios"

export default class ItemPokemon extends React.Component {

    render() {
        console.log(this.props.pokemon)
        return (
            <article>
                <div>
                    <p><strong>Detalhe</strong></p>
                    <p><strong>Nome :  </strong>{this.props.pokemon.name}</p>
                    <p><strong>Habilidade :  </strong>{this.props.pokemon.abilities[0].ability.name}</p>
                    <p><strong>Experiencia : </strong> {this.props.pokemon.base_experience}</p>
                    <p><strong>Tipo :  </strong>{this.props.pokemon.types[0].type.name}</p>
                    
                </div>
                <div>
                <img src={this.props.pokemon.sprites.front_default}/>
                </div>

            </article>
        )
    }
}