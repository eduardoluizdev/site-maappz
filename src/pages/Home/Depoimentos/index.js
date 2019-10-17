import React from 'react';
import NaiaraMotta from './naiaramotta';
import RafaelRosa from './rafaelrosa';

import { FlexContainerGrid } from '../styles';

const Depoimentos = (props) => {
    return(
        <FlexContainerGrid>
            <NaiaraMotta></NaiaraMotta>
            <RafaelRosa></RafaelRosa>
        </FlexContainerGrid>
    );
}

export default Depoimentos;