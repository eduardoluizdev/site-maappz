import React, { Component } from 'react';
import { Flexcontainer, Col, Detalheleft } from '../../pages/Home/styles'
import { BoxTextCTA, LinksCTA } from './styled';

import { Whatsapp } from 'styled-icons/boxicons-logos/Whatsapp';
import { MailSend } from 'styled-icons/boxicons-regular/MailSend';

class CTAContato extends Component{

    constructor (props) {
        super(props);
        this.state = {
            links: [
                {id:1, icon:<MailSend/>, nome:'Prefere por e-mail?', url:"mailto:comercial@maappz.com.br"},
                {id:2, icon:<Whatsapp/>, nome:'Me chama no Whatsapp!', url:"https://bit.ly/maappzorcamento"}
            ]
        }
    }
    render(){
        return(
            <Flexcontainer className="bgGradienteRoxo">
                <Col>
                    <BoxTextCTA>
                    <Detalheleft/>
                    <h2>Vamos conversar sobre o <strong>seu sonho?</strong> 🙏</h2>
				    <p>Fique tranquilo(a) que é sem nenhum compromisso. <br />
						Eu quero te ajudar a alcançar o seu sucesso! 💜</p>
                    </BoxTextCTA>
                </Col>

                <Col>
                    <LinksCTA>
                        {this.state.links.map((link) =>{
                            return(
                                <li key={link.id}><a href={link.url} className="btn" target="_blank" rel="noopener noreferrer">{link.icon} {link.nome}</a></li>
                            );
                        })}
                    </LinksCTA>
                </Col>
            </Flexcontainer>
        );
    }
}

export default CTAContato;