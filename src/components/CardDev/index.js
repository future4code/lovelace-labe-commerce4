import React, { Component } from "react";
import { Content, ContainerCard, ImgBox, Img } from "./styles";

export default class CardDev extends Component {
  render() {
    return (
      <ContainerCard>
        <ImgBox>
          <Img src={this.props.img} />
          <h2>{this.props.name}</h2>
        </ImgBox>
        <Content>
          <p>{this.props.apresentacao}</p>
        </Content>
      </ContainerCard>
    );
  }
}
