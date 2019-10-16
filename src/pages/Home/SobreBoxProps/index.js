import React from 'react';
import { BoxServicos } from '../styles';

const BoxServicosTxt = (props) => {
    return(
        <BoxServicos className={`${ props.boxColor }`}>
            <img src={props.imagem}/>
            <span>{props.titulo}</span>
            <p>{props.descricao}</p>
        </BoxServicos>
    );
}
export default BoxServicosTxt;