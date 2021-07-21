import React, { Component } from "react";
import Destino from "../../img/planeta-teste.jpg";
import { CardBox, Imagem, Titulo, Descricao, Button, Carrinho } from "./styles";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  render() {
    return (
      <CardBox>
        <Imagem src={Destino} />
        <Titulo>Nome do Destino</Titulo>
        <Descricao>
          Viagem a partir de <strong>R$ 4.000</strong>
        </Descricao>
        <Button>
          Comprar
          <Carrinho icon={faCartPlus} />
        </Button>
      </CardBox>
    );
  }
}
