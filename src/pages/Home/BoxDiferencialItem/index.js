import React from 'react';
import { BoxDiferencial } from '../styles';

const BoxDiferencialItem = (props) => {
    return(
        <BoxDiferencial>
            <span>{props.number}</span>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </BoxDiferencial>
    );
}

export default BoxDiferencialItem;