import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const UserPhoto = styled.img `
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img `
  width: 100%;
`
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
` 

const PostagemInputs = styled.input`
text-align:center;
height:20px;
margin: 8px 0;
`

const DivPai = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items:center;
`
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



  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoArray = this.state.posts
    novoArray.push(novoPost)
    this.setState({ posts: novoArray })

    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
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

    const listaPost = this.state.posts.map((post) => {
      return (
        // <PostContainer>
        //   <PostHeader>
        //     <UserPhoto scr = {post.fotoUsuario}/>
        //     <span>{post.nomeUsuario}</span>
        //   </PostHeader>
        //   <PostPhoto src={post.fotoPost}/>
        // </PostContainer>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

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

        {listaPost}
        
      </div>
    );
  }
}
export default App;
