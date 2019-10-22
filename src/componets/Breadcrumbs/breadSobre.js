import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Home} from 'styled-icons/boxicons-solid/Home';

import { BgBread } from './styled';

class BreadSobre extends Component{

    render(){
        return(
            <BgBread>
                <ol className="breadcrumb">
                    <li><Link to="/" title="Criação de Sites"><Home/> Home</Link></li>
                    <li className="active">Sobre nós</li>
                </ol>
            </BgBread>
        );
    }
}
export default BreadSobre;

