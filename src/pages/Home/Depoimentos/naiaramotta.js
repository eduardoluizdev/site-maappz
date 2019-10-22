import React from 'react';

import { Col, DepoimentoItem, TopDepo, Infos, Stars, Depoimento } from '../styles';

import { Star } from 'styled-icons/boxicons-solid/Star';

import Foto from '../../../assets/images/naiara.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NaiaraMotta = (props) => {
    return(
        <Col>
            <DepoimentoItem>
                <TopDepo>
                    <LazyLoadImage
                            alt="Foto Naiara Motta | Nadecora"
                            height="125"
                            effect="blur"
                            src={Foto}
                            width="125" />
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