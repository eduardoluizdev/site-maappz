import React from 'react';
import { Detalheleft } from '../styles';

const BannerTopo = (props) => {
    return(
        <div>
            <Detalheleft></Detalheleft>
            <small>{props.servico}</small>
            <h1>{props.titulo}</h1>
            <h3>{props.descricao}</h3>
        </div>
    );
}

export default BannerTopo;