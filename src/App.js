import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Confira nossos destinos</Titulo>
        <Form>
          <Ordenar>
            <option>Ordenar</option>
            <option>Decrescente</option>
            <option>Crescente</option>
          </Ordenar>
        </Form>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const Ordenar = styled.select`
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Titulo = styled.h1`
  text-align: center;
`;
export default App;
