import React, { Component } from "react";
import { Navbar, ImagemLogo, InputContainer, Input, Carrinho } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo1.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <ImagemLogo src={Logo}></ImagemLogo>
        <InputContainer>
          <Input
            value={this.props.inputBusca}
            onChange={this.props.onChangeBusca}
            type="text"
            placeholder="Pesquisar"
          />
          <FontAwesomeIcon icon={faSearch} />
        </InputContainer>

        <Carrinho icon={faShoppingCart} />
      </Navbar>
    );
  }
}
