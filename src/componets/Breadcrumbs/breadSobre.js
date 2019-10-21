import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Home} from 'styled-icons/boxicons-solid/Home';

import { BgBread } from './styled';


class BreadSobre extends Component{

    // xmlns:v="http://rdf.data-vocabulary.org/#"
    render(){
        return(
            <BgBread>
                <ol typeof="v:Breadcrumb" class="breadcrumb">
                    <li><Link to="/" rel="v:url" property="v:title" title="Criação de Sites"><Home/> Home</Link></li>
                    <li class="active">Sobre nós</li>
                </ol>
            </BgBread>
        );
    }
}
export default BreadSobre;


