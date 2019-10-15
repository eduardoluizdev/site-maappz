import React, { Component } from 'react';
import { Heade } from './styles';

import Navbar from '../Navbar';
import Logo from '../Logo';

class Header extends Component{
    render(){
        return(
            <Heade>
                <Logo />
                <Navbar />
            </Heade>
        );
    }
}

export default Header;