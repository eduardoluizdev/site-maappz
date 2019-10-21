import React from 'react';
import { BoxInfos } from './styles';

const Infos = (props) => {
    return(
        <BoxInfos>
            <span>{props.titulo}</span>
            <p>{props.descricao}</p>
        </BoxInfos>
    );
}
export default Infos;