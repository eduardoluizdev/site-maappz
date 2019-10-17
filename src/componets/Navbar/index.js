import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mainnav } from './styles';

class Navbar extends Component{
    render(){
        return(
            <Mainnav>
                <ul id="menu" className="">
                    <li><Link to="/" title="Maappz | Criação de Sites">Home</Link></li>
                    <li><Link to="/sobre-nos/" title="Sobre Nós">Sobre nós</Link></li>
                    <li><Link to="/criacao-de-site/" title="Criação de Sites">Criação de Sites</Link></li>
                    <li><Link to="/contato/" title="Contato">Contato</Link></li>
                </ul>
            </Mainnav>
        );
    }
}

export default Navbar;