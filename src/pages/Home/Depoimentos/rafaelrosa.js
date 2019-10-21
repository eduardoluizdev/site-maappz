import React from 'react';

import { Col, DepoimentoItem, TopDepo, Infos, Stars, Depoimento } from '../styles';

import { Star } from 'styled-icons/boxicons-solid/Star';

import Foto from '../../../assets/images/rafael.png'

const RafaelRosa = (props) => {
    return(
        <Col>
            <DepoimentoItem>
                <TopDepo>
                    <img src={Foto} alt="Foto Naiara Motta | Nadecora" width="125" height="125"/>
                    <Infos>
                    <span>Rafael Rosa</span>
                    <small>BuzzyRocks - www.buzzy.rocks</small>
                    <Stars>
                        <li><Star/></li><li><Star/></li><li><Star/></li><li><Star/></li><li><Star/></li>
                    </Stars>
                    </Infos>
                </TopDepo>
                <Depoimento>Trabalho como desenvolvedor e estava com problemas em conseguir novos clientes, a Maappz me ajudou anuncinar meus serviços de forma eficaz.</Depoimento>
            </DepoimentoItem>
        </Col>
    );
}

export default RafaelRosa;