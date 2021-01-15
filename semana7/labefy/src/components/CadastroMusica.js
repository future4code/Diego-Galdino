import React from "react"
import axios from "axios"
import { configAxios, urlBase } from "../Parametros"

export default class CadastroMusica extends React.Component {
    state = {
        nomeMusica: "",
        nomeBanda: "",
        urlMusica: "",
        idPlayList: "",
        listaPlaylist: []
    }
    componentDidMount() {
        this.pegaListaPlayList()
    
    }

    cadastraMusica = (id) => {

        // if (this.state.nomeMusica !== "" && this.state.nomeBanda !== "" && this.state.urlMusica !== "" && this.state.idPlayList !== "") {
        console.log(id)
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeBanda,
            url: this.state.urlMusica
        }
        axios
            .post(`${urlBase}/${id}/tracks`, body, configAxios)
            .then((res) => {
                alert("Musica cadastrada com sucesso")
            })
            .catch((erro) => { alert(erro.message) });
        // } else {
        // alert("Digite todos os campos")
        // }
    }

    pegaListaPlayList = () => {
        axios
            .get(urlBase, configAxios)
            .then((res) => {
                this.setState({ listaPlaylist: res.data.result.list })
                // console.log("este",res.data.result.list)
            })
            .catch((erro) => console.log(erro));
    }
    render() {

        return (
            <div>

                <h2>Adicionar Musica</h2>
                <select onChange={(e) => {this.setState({ idPlayList: e.target.value })}}>
                    {this.state.listaPlaylist.map((p) => {
                        return (
                            
                            <option value={p.id}>{p.name}</option>
                        )
                    })}
                </select>
                <p>Nome da Musica</p>
                <input type="text" onChange={(e) => this.setState({ nomeMusica: e.target.value })} />
                <p>Nome do Artista ou Banda</p>
                <input type="text" onChange={(e) => this.setState({ nomeBanda: e.target.value })}/>
                <p>URL da Musica</p>
                <input type="text" onChange={(e) => this.setState({ urlMusica: e.target.value })}/>
                <button onClick={()=>this.cadastraMusica(this.state.idPlayList)}>Salvar</button>

            </div>
        )
    }

}
