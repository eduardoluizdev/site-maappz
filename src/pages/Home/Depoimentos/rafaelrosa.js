import React from 'react';

import { Col, DepoimentoItem, TopDepo, Infos, Stars, Depoimento } from '../styles';

import { Star } from 'styled-icons/boxicons-solid/Star';

import Foto from '../../../assets/images/rafael.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RafaelRosa = (props) => {
    return(
        <Col>
            <DepoimentoItem>
                <TopDepo>
                <LazyLoadImage
                            alt="Foto Rafael Rosa | BuzzyRocks"
                            height="125"
                            effect="blur"
                            src={Foto}
                            width="125" />
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