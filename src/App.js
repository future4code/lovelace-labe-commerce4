import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import styled from "styled-components";

// ESTILIZAÇÃO DO APP

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Ordenar = styled.select`
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Titulo = styled.h1`
  text-align: center;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Viagem para a Terra",
        value: 6000.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg",
      },

      {
        id: 2,
        name: "Viagem para Júpiter",
        value: 16000.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
      },
      {
        id: 3,
        name: "Viagem para Marte",
        value: 10000.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
      },
      {
        id: 4,
        name: "Viagem para Urano",
        value: 17500.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg",
      },
      {
        id: 5,
        name: "Viagem para Netuno",
        value: 28000.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/800px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
      },
      {
        id: 6,
        name: "Viagem para Vênus",
        value: 11567.0,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/800px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg",
      },
      {
        id: 7,
        name: "Viagem para Krypton",
        value: 89990.0,
        imageUrl:
          "https://pm1.narvii.com/7016/ae3943f4b84d1cbde066f9958e278a95f851f4d6r1-487-443v2_hq.jpg",
      },
      {
        id: 8,
        name: "Viagem para Asgard",
        value: 99990.0,
        imageUrl:
          "https://pm1.narvii.com/6883/68dfc830928be5318b71ec327b7d0e4948b7c518r1-480-473v2_hq.jpg",
      },
    ],
    inputBusca: "",
    ordenacao: "ASC",
  };

  alteraOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  filtroPorNome = (produto) => {
    console.log(
      produto.name,
      this.state.inputBusca,
      produto.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
    );

    if (
      produto.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
    ) {
      return true;
    }

    return false;
  };

  filtrarLista = () => {
    const listaFiltrada = this.state.produtos.filter(this.filtroPorNome);

    listaFiltrada.sort((a, b) => {
      if (this.state.ordenacao === "ASC") {
        if (a.value < b.value) return -1;

        if (a.value > b.value) return 1;

        return 0;
      } else if (this.state.ordenacao === "DESC") {
        if (a.value < b.value) return 1;

        if (a.value > b.value) return -1;

        return 0;
      }
    });

    return listaFiltrada;
  };

  render() {
    const itensFiltrados = this.filtrarLista();
    console.log(this.state);

    return (
      <>
        <Header
          inputBusca={this.state.inputBusca}
          onChangeBusca={this.onChangeBusca}
        />
        <Container>
          <Titulo>Confira nossos destinos</Titulo>
          <Form>
            <Ordenar
              onChange={this.alteraOrdenacao}
              value={this.state.ordenacao}
            >
              <option value="">Ordenar</option>
              <option value="DESC">Decrescente</option>
              <option value="ASC">Crescente</option>
            </Ordenar>
          </Form>
          <CardList>
            {itensFiltrados.map((produto) => (
              <Card
                key={produto.id}
                name={produto.name}
                value={produto.value}
                imageUrl={produto.imageUrl}
              />
            ))}
          </CardList>
        </Container>
      </>
    );
  }
}

export default App;
