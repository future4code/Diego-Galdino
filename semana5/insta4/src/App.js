import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?1",
        fotoPost: "https://picsum.photos/200/150?1"
      },
      {
        nomeUsuario: "diego",
        fotoUsuario: "https://picsum.photos/50/50?2",
        fotoPost: "https://picsum.photos/200/150?2"
      },
      {
        nomeUsuario: "rodrigo",
        fotoUsuario: "https://picsum.photos/50/50?3",
        fotoPost: "https://picsum.photos/200/150?3"
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  listaPost = this.state.posts.map((post) => {
    return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoArray = this.state.posts
    novoArray.push(novoPost)
    this.setState({ posts: novoArray })
    this.ultimoPost()
    // (()=>{
    //   return (
    //     <Post
    //       nomeUsuario={novoPost.nomeUsuario}
    //       fotoUsuario={novoPost.fotoUsuario}
    //       fotoPost={novoPost.fotoPost}
    //     />
    //   )
    // })
  }

  ultimoPost = () => {
    console.log("item", this.state.posts.length - 1)
    const itemPost = this.state.posts.filter((post, index) => {
      let item
      if (index === this.state.posts.length - 1) {
        item = post
        console.log("item")
        return (<Post
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />)
      }
    })
    
  }

  onChangeUsuarioNome = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
    console.log(event.target.value)
  };
  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
    console.log(event.target.value)
  };
  onChangeFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
    console.log(event.target.value)
  };


  render() {

    return (
      <div className={'app-container'}>
        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeUsuarioNome}
          placeholder={"Nome"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder={"Foto Usuario"}
        />
        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder={"Foto Post"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>

        {this.listaPost}
        
      </div>
    );
  }
}
export default App;
