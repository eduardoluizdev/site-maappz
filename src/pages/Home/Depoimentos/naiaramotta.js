import React from 'react';

import { Col, DepoimentoItem, TopDepo, Infos, Stars, Depoimento } from '../styles';

import { Star } from 'styled-icons/boxicons-solid/Star';

import Foto from '../../../assets/images/naiara.png'

const NaiaraMotta = (props) => {
    return(
        <Col>
            <DepoimentoItem>
                <TopDepo>
                    <img src={Foto} alt="Foto Naiara Motta | Nadecora" width="125" height="125"/>
                    <Infos>
                    <span>Naiara Motta</span>
                    <small>Nadecora - www.nadecorarj.com.br</small>
                    <Stars>
                        <li><Star/></li><li><Star/></li><li><Star/></li><li><Star/></li><li><Star/></li>
                    </Stars>
                    </Infos>
                </TopDepo>
                <Depoimento>A Maappz me ajudou a enxergar o meu público alvo, focou no que realmente importa e com isso estou conseguindo alcançar meus objetivos.</Depoimento>
            </DepoimentoItem>
        </Col>
    );
}

export default NaiaraMotta;