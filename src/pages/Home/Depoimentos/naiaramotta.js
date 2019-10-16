import React from 'react';
// import styled from 'styled-components';

import { Col, DepoimentoItem, TopDepo, Infos, Stars, Depoimento } from '../styles';

// import StarIcon from 'styled-icons/boxicons-solid/Star';

import Foto from '../../../assets/images/depo.png'

const NaiaraMotta = (props) => {
    return(
        <Col>
            <DepoimentoItem>
                <TopDepo>
                    <img src={Foto} alt="Foto Naiara Motta | Nadecora"/>
                    <Infos>
                    <span>Naiara Motta</span>
                    <small>Nadecora - www.nadecorarj.com.br</small>
                    <Stars>
                        {/* <li>{ StarIcon }</li><li>{ StarIcon }</li><li>{ StarIcon }</li><li>{ StarIcon }</li><li>{ StarIcon }</li> */}
                    </Stars>
                    </Infos>
                </TopDepo>
                <Depoimento>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae, possimus cupiditate, ex beatae optio est magnam architecto, repellat dolores id ducimus nobis placeat.</Depoimento>
            </DepoimentoItem>
        </Col>
    );
}

export default NaiaraMotta;