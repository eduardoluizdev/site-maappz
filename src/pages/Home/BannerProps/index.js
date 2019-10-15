import React from 'react';

const BannerTopo = (props) => {
    return(
        <div>
            <small>{props.servico}</small>
            <h1>{props.titulo}</h1>
            <h3>{props.descricao}</h3>
        </div>
    );
}

export default BannerTopo;