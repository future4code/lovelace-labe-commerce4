import React, { Component } from "react";
import { Content, ContainerCard, ImgBox, Img } from "./styles";

import Ingrid from "../../img/perfil.jpg";

export default class CardDev extends Component {
  render() {
    return (
      <ContainerCard>
        <ImgBox>
          <Img src={Ingrid} />
          <h2>Ingrid Flack</h2>
        </ImgBox>
        <Content>
          <p>
            Sócia do projeto Dream Rocket e estudante do curso Web Full Stack na
            Labenu
          </p>
        </Content>
      </ContainerCard>
    );
  }
}
