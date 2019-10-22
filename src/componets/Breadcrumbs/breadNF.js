import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Home} from 'styled-icons/boxicons-solid/Home';

import { BgBreadNF } from './styled';

class BreadNFound extends Component{

    render(){
        return(
            <BgBreadNF>
                <ol className="breadcrumb">
                    <li><Link to="/" title="Criação de Sites"><Home/> Home</Link></li>
                    <li className="active">Página não encontrada</li>
                </ol>
            </BgBreadNF>
        );
    }
}
export default BreadNFound;

