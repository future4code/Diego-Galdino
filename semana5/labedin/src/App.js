import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardProjeto from './components/CardProjeto/CardProjeto';
import ImagemPerfil from './img/foto.jpg';
import ImagemEmpresa from './img/ps.png';
import ImagemP1 from './img/logo-doe.png';
import ImagemP2 from './img/logo-hero.png';
import ImagemP3 from './img/logo-nossa.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Diego Galdino da Silva Neves" 
          descricao="Trabalhei por um tempo fora do setor TI e nos últimos 4 anos trabalhei com suporte ao usuário e com o termino de contrato da empresa, posso me dedicar aos estudos pois sempre gostei de programação e de tecnologia. 
          Pretendo conseguir essa realização profissional."
        />

        <CardPequeno email="Email: diegogaldino@hotmail.com" endereco="End.: Avenida Ademar de Barros, 440 - Guaruja-SP"/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemEmpresa} 
          nome="Porto de Santos" 
          descricao="Suporte ao Usuario niveis 1 e 2" 
        />
      </div>

      <div className="page-section-container">
      <h2>Projetos</h2>
        <ul className="projetos">
          <CardProjeto 
            nome="Projeto DOE" 
            imagem={ImagemP1} 
            descricao="Site onde as pessoas podem se cadastrar como doador de sangue"
          />
          <CardProjeto 
            nome="Projeto Be the Hero" 
            imagem={ImagemP2} 
            descricao="Site e aplicativo onde as pessoas podem encontrar animais para adoção"
          />
          <CardProjeto 
            nome="Nossa Saude" 
            imagem={ImagemP3} 
            descricao="Aplicativo de controle de medicamento"
          />
        </ul>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
