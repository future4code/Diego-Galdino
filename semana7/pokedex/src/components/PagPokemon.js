import axios from "axios";
import React from "react"
import ItemPokemon from "./ItemPokemon";



export default class PagPokemon extends React.Component {
    state = {
        listaPokemons: [],
        pokemon: [],
        visivel: false,
        valorBuscaInput: "",
    }
    valorBusca = (e) => {
        console.log(e.target.value)
        this.setState({
          valorBuscaInput: e.target.value
        });
      }

    componentDidMount() {
        this.pegaListaDePokemons();
    }

    pegaListaDePokemons = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=30")
            .then((res) =>
                this.setState({ listaPokemons: res.data.results })
            )
            .catch((erro) => console.log(erro));
    };

    pegaPokemon = (nome) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then((res) => {
                // this.setState({ imagemPokemon: res.data.sprites.front_default });
                console.log(res)
                this.setState({ pokemon: res.data });
            })
            .catch((erro) => console.log(erro));
    };

    render() {
        const filtrarPokemon = () => {
            let listaFiltrada
            if (this.state.valorBuscaInput !== "") {
                listaFiltrada = this.state.listaPokemons.filter((p) => {
                    const novoNome = p.name.toLowerCase();
                    const input = this.state.valorBuscaInput.toLowerCase();
                    if (novoNome.includes(input)) {
                        return true
                    } else {
                        return false
                    }
                })
                 console.log(listaFiltrada)
            }else{
                listaFiltrada = this.state.listaPokemons
            }
            return listaFiltrada
        }

        const renderListaPokemon = filtrarPokemon().map((p) => {
            return (
                <div>
                    <hr />
                    <li onClick={() => { this.pegaPokemon(p.name) }}><p><strong>{p.name}</strong></p></li>

                    {(this.state.visivel) || (p.name === this.state.pokemon.name) ?
                        <ItemPokemon pokemon={this.state.pokemon} />
                        // () => this.setState({ visivel: !this.state.visivel })
                        :
                        () => this.setState({ visivel: !this.state.visivel })}
                </div>
            )
        })

        return (
            <main>
                <p>Buscar Pokemon</p>
                <input type="text" onChange={this.valorBusca} value={this.state.valorBuscaInput}/>
                <ul>
                    {renderListaPokemon}
                </ul>
            </main>
        )
    }

}

