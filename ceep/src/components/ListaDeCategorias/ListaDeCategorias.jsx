import React, { Component } from 'react';

class ListaDeCategorias extends Component {
    state = {  }

    _handleEventoInput(e){
        if(e.key === "Enter"){
            let valorCategoria =e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    //statefull x statelees - Uma armazena e guarda informações interna e o outro é um componentes simples. só renderiza 
    render() { 
        return ( 
            <>
                <section className="lista-categorias">
                    <ul className="lista-categorias_lista">
                        {this.props.categorias.map((categoria,index) => {
                            return <li key={index} className="lista-categorias_item"> {categoria} </li>
                        })}
                        <li className="lista-categorias_item">Categorias</li>
                        <li className="lista-categorias_item">Categorias</li>
                        <li className="lista-categorias_item">Categorias</li>
                    </ul>

                    <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                    />
                </section>
            </>
        );
    }
}
 
export default ListaDeCategorias;