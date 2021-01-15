import React from "react"
import axios from "axios"
import { configAxios, urlBase } from "../Parametros"
import ItemMusica from "./ItemMusica"


export default class ListaPlaylist extends React.Component {

    state = {
        listaPlaylist: [],
        visivel: false,
        playListSelecionada:[]

    }

    componentDidMount() {
        this.pegaListaPlayList()
    }

    pegaListaPlayList = () => {
        axios
            .get(urlBase, configAxios)
            .then((res) => {
                this.setState({ listaPlaylist: res.data.result.list })
                // console.log(res.data.result.list)
            })
            .catch((erro) => console.log(erro));
    }
    selecionaPlayList = (playList) => {
        this.setState({ visivel: !this.state.visivel })

        axios
        .get(urlBase+"/search?name="+playList.name, configAxios)
        .then((res) => {
            this.setState({ playListSelecionada: res.data.result.playlist[0] })
        })
        .catch((erro) => console.log(erro));
    }
    excluirPlayList = (playList) => {
        if (window.confirm("Tem certeza que deseja excluir esta PlayList?")) {
            axios
                .delete(urlBase + "/" + playList.id, configAxios)
                .then((resposta) => {
                    this.pegaListaPlayList()
                })
                .catch((erro) => {
                    console.log(erro.message)
                })
        }
    }

    render() {
        const exibirLista = this.state.listaPlaylist.map((p) => {
            return (
                <div>
                    <li onClick={()=>this.selecionaPlayList(p) }><p><strong>{p.name}</strong></p></li>
                    <button onClick={() => { this.excluirPlayList(p) }}>Excluir</button>
                    {this.state.visivel&&this.state.playListSelecionada.name===p.name ?
                     <ItemMusica playList={p} /> : false}

                </div>
            )
        })
        return (
            <div>
                <h2>PlayLists</h2>
                {exibirLista}
            </div>
        )
    }

}
