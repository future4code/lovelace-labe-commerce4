import React, { Component } from "react";
import { Footer, Icone } from "./styles";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default class Rodape extends Component {
  render() {
    return (
      <Footer>
        <Icone icon={faFacebookSquare} />
        <Icone icon={faInstagramSquare} />
        <Icone icon={faTwitterSquare} />
      </Footer>
    );
  }
}
