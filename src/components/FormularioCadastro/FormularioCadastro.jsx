import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {
    constructor() {
        super();
        this.titulo = "";
    }

    handleMudancaTitulo(evento) {
        this.titulo = (evento.target.value);
        console.log(this.titulo);
    }
    render() {
        return (
            <form className="form-cadastro">
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input">
                </textarea>
                <button className="formcadastro_input form-cadastro-submit">
                    Criar Nota
                </button>
            </form>
        );
    };
}

export default FormularioCadastro;