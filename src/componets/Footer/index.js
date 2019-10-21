import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FlexContainerGrid } from '../../pages/Home/styles';
import { FooterDiv, ColFooter, GroupIpt, SocialLinks, Copy } from './styles';

import { Rocket } from 'styled-icons/fa-solid/Rocket';

import { Facebook } from 'styled-icons/boxicons-logos/Facebook';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Heart } from 'styled-icons/boxicons-solid/Heart';


class Footer extends Component{

    constructor (props) {
        super(props);
        this.state = {
            linksSociais: [
                {id:1, title:'Facebook Maappz', icon:<Facebook/>, url:"https://www.facebook.com/maappz/"},
                {id:2, title:'Twitter Maappz', icon:<Twitter/>, url:"https://twitter.com/maappz/"},
                {id:3, title:'Instagram  Maappz', icon:<Instagram/>, url:"https://www.instagram.com/maappz.web/"},
                {id:4, title:'Github Maappz', icon:<Github/>, url:"https://github.com/eduardoluizmaappz/"}
            ]
        }
    }
    render(){
        return(
            <div>
            <FooterDiv>
                <FlexContainerGrid>
                    <ColFooter>
                    <strong>Mapa do Site</strong>
                        <ul>
                            <li><Link to="/" title="Maappz | Criação de Sites">Home</Link></li>
                            <li><Link to="/sobre-nos/" title="Sobre Nós">Sobre nós</Link></li>
                            <li><a href="http://bit.ly/maappzorcamento" target="_blank" rel="noopener noreferrer" title="Entre em contato através do nosso whatsapp!" className="WhatsLink">Maappz no Whats!</a></li>

                            {/* <li><Link to="/contato/" title="Contato">Contato</Link></li> */}
                        </ul>
                    </ColFooter>
                    <ColFooter>
                    <strong>Serviços</strong>
                    <ul>
                        <li><Link to="/criacao-de-site/" title="Criação de Sites">Criação de Sites</Link></li>
                    </ul>
                    </ColFooter>
                    <ColFooter>
                    <strong>Termos e Políticas</strong>
                    <ul>
                        <li><Link to="/" title="Política de Privacidade">Política de Privacidade</Link></li>
                    </ul>
                    </ColFooter>
                    <ColFooter>
                    <form action="">
                        <strong>Se inscreva para receber nossas novidades!</strong>
                        <GroupIpt>
                            <input type="text" name="email" placeholder="Insira seu e-mail..." required title="Email para Newsletter" />
                            <button type="submit"><Rocket/> Enviar</button>
                        </GroupIpt>
                    </form>

                    <SocialLinks>
                        <li><strong>Acomanhe a Maappz nas Mídias Sociais:</strong></li>
                        {this.state.linksSociais.map((linkSocial) =>{
                            return(
                                <li key={linkSocial.id}><a href={linkSocial.url} className="btn" target="_blank" rel="noopener noreferrer" title={linkSocial.title}>{linkSocial.icon}</a></li>
                            );
                        })}
                    </SocialLinks>
                    </ColFooter>
                </FlexContainerGrid>
            </FooterDiv>
            <Copy>
                © 2019 MAAPPZ - Todos os direitos reservados | Feito com <Heart/> no Rio de Janeiro
            </Copy>
            </div>
        );
    }
}

export default Footer;