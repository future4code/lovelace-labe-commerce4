import React, { Component } from "react";
import { DivTexto, TextoIntro } from "./styles";


export default class Intro extends Component {
    render() {
        return (

            <DivTexto>

                <TextoIntro>

                    <b>A Dream Rocket surgiu com o sonho de possibilitar viagens interplanetarias para pessoas comuns. Movidos pela paixão de realizar sonhos, os CEO's: <p>Ingrid Flack, Leandro Wilker e Hugo Brito.</p> Decidiram que os sorrisos gerados pela empresa seriam o combustivel para o sucesso. Em menos de três anos, já fizeram diversas viagens com seus tripulantes sonhadores. A empresa hoje é destaque no cenário global, estando a frente de seus concorrentes Blue Origin e Virgin Galactic, estreou a poucos meses nas maiores bolsas de valores do mundo e foi quebrando records de vendas de ações em apenas um dia.

                    <p>Uma empresa feita por pessoas comuns para pessoas comuns, e ae vai ficar fora dessa?</p> 

                    <p>Dream Rocket, transformando sonhos em realidade.</p></b>

                </TextoIntro>
                
            </DivTexto>
        )
    }
}
