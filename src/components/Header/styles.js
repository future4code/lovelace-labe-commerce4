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

  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;

  svg {
    color: #000;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 576px) {
    margin: 0 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 36px 8px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #eee;
`;

export const Carrinho = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #000;
  cursor: pointer;
  margin-right: 30px;

  @media screen and (max-width: 576px) {
    margin-right: 10px;
  }
`;
