import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mainnav } from './styles';

class Navbar extends Component{
    render(){
        return(
            <Mainnav>
                <ul id="menu" className="">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Sobre nós</Link></li>
                    <li><Link to="/">Serviços</Link></li>
                    <li><Link to="/">Cases</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Contato</Link></li>
                </ul>
            </Mainnav>
        );
    }
}

export default Navbar;