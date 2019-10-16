import React from 'react';
import { BoxTextMid, Detalheleftcolor } from '../styles';

const BoxTextMidTxt = (props) => {
    return(
        <BoxTextMid>
            <Detalheleftcolor></Detalheleftcolor>
            <h2>{props.titulo}</h2>
            <h3>{props.descricao}</h3>
        </BoxTextMid>
    );
}
export default BoxTextMidTxt;