import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BannerTopo from './BannerProps';

import { Bgwrapper, Flexcontainer, Col, BoxTextTop, Detalheleft, BoxImgTop } from './styles';
import HomemFoguete from '../../assets/images/01.png';

class Home extends Component{
    render(){
        return(
            <Bgwrapper>
                <Flexcontainer>
                    <Col>
                        <BoxTextTop>
                            <Detalheleft></Detalheleft>
                            <BannerTopo
                                servico="Desenvolvimento de Sites"
                                titulo={["Uma solução personalizada para o", <strong> seu negócio!</strong>]}
                                descricao={["Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante", <strong> para você!</strong>, " 👊"]}
                                />
                            <Link to="/" className="btn">Solicite seu Orçamento!</Link>
                        </BoxTextTop>
                    </Col>

                    <Col>
                        <BoxImgTop>
                            <img src={HomemFoguete} alt="Homem Foguete"/>
                        </BoxImgTop>
                    </Col>
                </Flexcontainer>
            </Bgwrapper>
        );
    }
}

export default Home;

