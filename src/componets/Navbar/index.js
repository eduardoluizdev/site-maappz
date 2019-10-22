import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mainnav } from './styles';
import { Whatsapp } from 'styled-icons/boxicons-logos/Whatsapp';

class Navbar extends Component{
    render(){
        return(
            <Mainnav>
                <ul id="menu" className="">
                    <li><Link to="/" title="Maappz | Criação de Sites">Home</Link></li>
                    <li><Link to="/sobre-nos/" title="Sobre Nós">Sobre nós</Link></li>
                    <li><Link to="/criacao-de-sites/" title="Criação de Sites">Criação de Sites</Link></li>
                    <li><a href="http://bit.ly/maappzorcamento" target="_blank" rel="noopener noreferrer" title="Entre em contato através do nosso whatsapp!" className="WhatsLink"><Whatsapp/> Maappz no Whats!</a></li>
                </ul>
            </Mainnav>
        );
    }
}

export default Navbar;