import React from "react"
import axios from "axios"
import { configAxios, urlBase } from "../Parametros"


export default class ItemMusica extends React.Component {

    state = {
        musicasPlayList: []
    }
    componentDidMount() {
        // console.log(this.props.playList.id)
        this.pegaMusicaPlayList(this.props.playList.id)
    }

    pegaMusicaPlayList = (id) => {
        axios
            .get(`${urlBase}/${id}/tracks`, configAxios)
            .then((res) => {
                // console.log(res.data.result.tracks)
                this.setState({ musicasPlayList: res.data.result.tracks});
            })
            .catch((erro) => console.log(erro));
    }

    excluirMusica = (musica) => {
        if (window.confirm("Tem certeza que deseja excluir esta musica?")) {
            axios
                .delete(`${urlBase}/${this.props.playList.id}/tracks/${musica.id}`, configAxios)
                .then((resposta) => {
                    this.componentDidMount()
                })
                .catch((erro) => {
                    console.log(erro.message)
                })
        }
    }

    render() {
        const exibirListaMusica = this.state.musicasPlayList.map((p) => {
            return (
                <div className="itemMusica">
                    <p className="numero">{(this.state.musicasPlayList.indexOf(p))+1}</p>
                    <p>Artista: <strong>{p.artist}</strong></p>
                    <p>Musica: <strong>{p.name}</strong></p>
                    <audio  controls="controls" src={p.url}></audio>
                    <button onClick={() => { this.excluirMusica(p) }}>Excluir Musica</button>
                </div>
            )
        })

        return (
            <div>
                {exibirListaMusica}
            </div>
        )
    }

}
