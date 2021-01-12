import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias"
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias: ["Game", "Música"],
    };
  }

  criarNota(titulo, texto, categoria){

    //array de objetos
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }

    //App renderiza novamente
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){

    //array de textos
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]

    //setando o novo estado 
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }


  deletarNota(index){

    //let por que vamos ter uma variavel 
    let arrayNotas = this.state.notas;

    //deleta um item (índice, e quanto?)
    arrayNotas.splice(index,1);

    //novo objeto com o array de notas
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
          <main className="conteudo-principal">  
            <ListaDeCategorias 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}/>
            <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>
          </main>   
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
