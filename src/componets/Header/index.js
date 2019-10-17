import React, { Component } from 'react';
import { Heade, BgHeader } from './styles';

import Navbar from '../Navbar';
import Logo from '../Logo';

class Header extends Component{
    render(){
        return(
            <BgHeader>
                <Heade>
                    <Logo />
                    <Navbar />
                </Heade>
            </BgHeader>
        );
    }
}

export default Header;