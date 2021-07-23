import React from "react";
import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import CardDev from "./components/CardDev";
import Rodape from "./components/Rodape";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/Card/styles";

import styled from "styled-components";

import Ingrid from "./img/perfil.jpg";
import Hugo from "./img/hugo.jpeg";
import Leandro from "./img/leandro.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ESTILIZAÇÃO DO APP

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1130px;
  padding: 0 15px;
  min-height: 50vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-right: 5px;
`;

const Filtro = styled.input`
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  width: 100px;
`;
const Mensagem = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 40px 0 0;
`;

const Ordenar = styled.select`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Titulo = styled.h1`
  text-align: center;
  margin-top: 60px;
`;

const Valores = styled.div`
  display: flex;
  @media screen and (max-width: 576px) {
    display: flex;
    margin-bottom: 10px;
  }
`;

const Valor = styled.div`
  display: flex;
  line-height: 1;
  align-items: center;
`;

const BoxDev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Estilização do Carrinho

const TituloCarrinho = styled.h3`
  text-align: center;
`;
const Carrinho = styled.div`
  position: sticky;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  top: 25px;
  padding: 25px;
  margin: 25px;
  max-height: 400px;
  width: 100%;
  max-width: 300px;

  > p {
    margin: 20px 0 0;
  }
`;

const CarrinhoLista = styled.div`
  overflow: auto;
`;

const CarrinhoItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${Button} {
    margin: 0;
  }

  & + & {
    margin-top: 20px;
  }
`;

const ValorProduto = styled.p``;

const TotalCarrinho = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 700;
`;
const PrecoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;

  &,
  p {
    margin: 0;
  }

  p + p {
    margin-left: 10px;
  }
`;

const Icone = styled(FontAwesomeIcon)``;

const BoxViagem = styled.div``;

const NomeViagem = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const BoxCompras = styled.div`
  display: flex;
  align-items: flex-start;
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
    inputValorMinimo: "",
    inputValorMaximo: "",
    carrinho: [],
  };

  onChangeValorMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  alteraOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  removeProduto = (id) => {
    const carrinhoAtualizado = this.state.carrinho.filter((produto) => {
      return id !== produto.id;
    });
    this.setState({ carrinho: carrinhoAtualizado });
  };

  // onInputChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value });
  // };

  filtroPorNome = (produto) => {
    if (
      produto.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
    ) {
      return true;
    }

    return false;
  };

  filtroValorMinimo = (produto) => {
    const valorMinimo = Number(this.state.inputValorMinimo);

    if (this.state.inputValorMinimo === "" || isNaN(valorMinimo)) {
      return true;
    }

    return produto.value >= valorMinimo;
  };

  filtroValorMaximo = (produto) => {
    const valorMaximo = Number(this.state.inputValorMaximo);
    const valorMinimo = Number(this.state.inputValorMinimo);

    if (
      this.state.inputValorMaximo === "" ||
      valorMaximo <= valorMinimo ||
      isNaN(valorMaximo)
    )
      return true;

    return produto.value <= valorMaximo;
  };

  filtrarLista = () => {
    const listaFiltrada = this.state.produtos
      .filter(this.filtroPorNome)
      .filter(this.filtroValorMinimo)
      .filter(this.filtroValorMaximo);

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

  somarCarrinho = (id) => {
    let selecionarProduto = this.state.produtos.find(
      (produto) => produto.id === id
    );
    let buscarCarrinho = this.state.carrinho.find(
      (produto) => produto.id === id
    );
    if (buscarCarrinho !== undefined) {
      const index = this.state.carrinho.findIndex(
        (produto) => produto.id === id
      );
      const novoEstado = [...this.state.carrinho];
      novoEstado[index].contador = this.state.carrinho[index].contador + 1;
      novoEstado[index].total =
        this.state.carrinho[index].value * novoEstado[index].contador;
      return this.setState(novoEstado);
    }
    selecionarProduto.total = selecionarProduto.value;
    selecionarProduto.contador = 1;
    this.setState({ carrinho: [...this.state.carrinho, selecionarProduto] });
  };

  render() {
    const itensFiltrados = this.filtrarLista();
    const totalCarrinho = this.state.carrinho.reduce(
      (acc, curr) => acc + curr.total,
      0
    );

    return (
      <>
        <Header
          inputBusca={this.state.inputBusca}
          onChangeBusca={this.onChangeBusca}
        />
        <BoxCompras>
          <Container>
            <Titulo>Confira nossos destinos</Titulo>

            <Form>
              <Valores>
                <Valor>
                  <Label>Valor mínimo:</Label>
                  <Filtro
                    type="number"
                    onChange={this.onChangeValorMinimo}
                    value={this.state.inputValorMinimo}
                    min="0"
                  />
                </Valor>

                <Valor>
                  <Label>Valor máximo:</Label>
                  <Filtro
                    type="number"
                    onChange={this.onChangeValorMaximo}
                    value={this.state.inputValorMaximo}
                    min="0"
                  />
                </Valor>
              </Valores>

              <Ordenar
                onChange={this.alteraOrdenacao}
                value={this.state.ordenacao}
              >
                <option value="">Ordenar</option>
                <option value="DESC">Decrescente</option>
                <option value="ASC">Crescente</option>
              </Ordenar>
            </Form>

            {itensFiltrados.length > 0 ? (
              <CardList>
                {itensFiltrados.map((produto) => (
                  <Card
                    key={produto.id}
                    name={produto.name}
                    value={produto.value}
                    imageUrl={produto.imageUrl}
                    adicionar={() => this.somarCarrinho(produto.id)}
                  />
                ))}
              </CardList>
            ) : (
              <Mensagem>Nenhum item encontrado</Mensagem>
            )}
          </Container>

          <Carrinho>
            <TituloCarrinho>Carrinho de Compras</TituloCarrinho>
            <CarrinhoLista>
              {this.state.carrinho.map((produto) => (
                <CarrinhoItem key={produto.id}>
                  <BoxViagem>
                    <NomeViagem>{produto.name}</NomeViagem>
                    <PrecoContainer>
                      <ValorProduto>
                        <strong>R$</strong> {produto.value}
                      </ValorProduto>
                      <p>{produto.contador}x</p>
                      <p>
                        <strong>R$</strong> {produto.total}
                      </p>
                    </PrecoContainer>
                  </BoxViagem>
                  <Button
                    type="button"
                    onClick={() => this.removeProduto(produto.id)}
                  >
                    <Icone icon={faTrashAlt} />
                  </Button>
                </CarrinhoItem>
              ))}
            </CarrinhoLista>

            <TotalCarrinho>Total: R$ {totalCarrinho}</TotalCarrinho>
          </Carrinho>
        </BoxCompras>

        <Titulo>Desenvolvedores</Titulo>
        <BoxDev>
          <CardDev
            name="Hugo Brito"
            apresentacao="Sócio do projeto Dream Rocket e estudante do curso Web Full Stack na
            Labenu"
            img={Hugo}
          ></CardDev>
          <CardDev
            name="Ingrid Flack"
            apresentacao="Sócia do projeto Dream Rocket e estudante do curso Web Full Stack na
            Labenu"
            img={Ingrid}
          ></CardDev>
          <CardDev
            name="Leandro Wilker"
            apresentacao="Sócio do projeto Dream Rocket e estudante do curso Web Full Stack na
            Labenu"
            img={Leandro}
          ></CardDev>
        </BoxDev>

        <Rodape />
      </>
    );
  }
}

export default App;
