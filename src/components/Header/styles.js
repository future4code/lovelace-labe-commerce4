import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  color: #fff;
  align-items: center;
`;

export const ImagemLogo = styled.img`
  height: 80px;
  margin-left: 30px;
`;
export const Form = styled.form`
  width: 40%;
`;

export const Input = styled.input`
  width: 80%;
  padding: 8px 10px;
  border-radius: 5px 0 0px 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  background-color: #fff;
  cursor: pointer;
`;

export const Carrinho = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #000;
  cursor: pointer;
  margin-right: 30px;
`;
