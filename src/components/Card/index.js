import React, { Component } from "react";
import { CardBox, Imagem, Titulo, Descricao, Button, Carrinho } from "./styles";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  render() {
    return (
      <CardBox>
        <Imagem src={this.props.imageUrl} />
        <Titulo>{this.props.name}</Titulo>
        <Descricao>
          Viagem a partir de <strong>R${this.props.value}</strong>
        </Descricao>
        <Button>
          Comprar
          <Carrinho icon={faCartPlus} />
        </Button>
      </CardBox>
    );
  }
}
