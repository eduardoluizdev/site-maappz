import React from 'react';
import { Detalheleft } from '../styles';

const BannerTopo = (props) => {
    return(
        <div>
            <Detalheleft></Detalheleft>
            <small>{props.servico}</small>
            <h1>{props.titulo} <strong>{props.destaqueTitulo}</strong></h1>
            <h3>{props.descricao} <strong>{props.destaqueDescricao}</strong></h3>
        </div>
    );
}

export default BannerTopo;