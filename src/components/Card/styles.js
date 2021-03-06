import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Titulo = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 16px 0 0 0;
`;

export const Descricao = styled.p`
  margin: 6px 0 10px 0px;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 10px;
  margin: 20px auto;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #f8c544;
`;

export const Carrinho = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;
