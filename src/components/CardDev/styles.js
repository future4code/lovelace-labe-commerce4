import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  margin-top: -50px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  p {
    margin-bottom: 0;
  }
`;

export const ContainerCard = styled.div`
  max-width: 300px;
  height: 320px;
  background-color: #fff;
  margin: 0px 30px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%);
  transition: 0.4s ease-in-out;
  border-radius: 5px;

  &:hover {
    height: 420px;

    ${Content} {
      visibility: visible;
      opacity: 1;
      margin-top: -30px;
      transition-delay: 0.3s;
    }
  }
`;

export const ImgBox = styled.div`
  z-index: 1;
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 4px;
`;
