import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {
    render() {
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" />
                <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input"></textarea>
                <button className="formcadastro_input form-cadastro-submit">Criar Nota</button>
            </form>
        );
    };
}

export default FormularioCadastro;