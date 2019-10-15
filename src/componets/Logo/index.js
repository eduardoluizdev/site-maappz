import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Respmenu, Toggle } from './styles';

import logotipo from '../../assets/images/logo.png'

class Logo extends Component{

    render(){
        return(
            <Respmenu>
                <Link to="/" className="logo">
                    <img src={logotipo} alt="Maappz | Agencia de Criação de Sites"/>
                </Link>
                <Toggle id="toggle">
                    Menu
                </Toggle>
            </Respmenu>
        );
    }
}

export default Logo;