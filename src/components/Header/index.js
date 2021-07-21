import React, { Component } from "react";
import { Navbar, ImagemLogo, Form, Input, Button, Carrinho } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo1.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <ImagemLogo src={Logo}></ImagemLogo>
        <Form>
          <Input
            value={this.props.inputBusca}
            onChange={this.props.onChangeBusca}
            type="search"
            placeholder="Pesquisar"
          />
          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Form>

        <Carrinho icon={faShoppingCart} />
      </Navbar>
    );
  }
}
