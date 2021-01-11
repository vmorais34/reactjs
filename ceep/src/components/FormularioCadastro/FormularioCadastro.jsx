import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
  }

  _handleMundacaTitulo(evento){
      this.titulo = evento.target.value;
      evento.stopPropagation();
  }

  _handleMundacaTexto(evento){
    this.texto = evento.target.value;
    evento.stopPropagation();
  }

  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro"
            onSubmit={this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          //This é dinamico e retorna erro sem o binding
          onChange={this._handleMundacaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMundacaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
