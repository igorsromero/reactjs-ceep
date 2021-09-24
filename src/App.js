import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import api from "./services/api";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  async componentDidMount() {
    const response = await api.get("/notas");
    this.setState({ notas: response.data, titulo: "", texto: "" });
  }

  async criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    await api.post("/notas", novaNota);
    this.componentDidMount();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
