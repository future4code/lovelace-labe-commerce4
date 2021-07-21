import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Destino from "../../img/planeta-teste.jpg";

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
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </CardBox>
    );
  }
}

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Imagem = styled.img`
  width: 100%;
`;

const Titulo = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 16px 0 0 0;
`;

const Descricao = styled.p`
  margin: 6px 0 10px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 30%;
  padding: 10px 10px;
  margin: 20px auto;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #f8c544;
`;
