import React from 'react';
import { BoxServicos, Col } from '../../Home/styles';

const CriacaoProcesso = (props) => {
    return(
        <Col>
            <BoxServicos className={`marginall ${ props.boxColor }`}>
                <div>{props.imagem}</div>
                <span>{props.titulo}</span>
                <p>{props.descricao}</p>
            </BoxServicos>
        </Col>
    );
}
export default CriacaoProcesso;