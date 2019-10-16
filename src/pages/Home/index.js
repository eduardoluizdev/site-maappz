import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BannerTopo from './HomeProps';
import BoxTextMidTxt from './SobreProps';
import BoxServicosTxt from './SobreBoxProps';

import { Bgwrapper, Flexcontainer, Col, BoxTextTop, BoxImgTop, SectionWhite, GridBox, BoxTextMid } from './styles';

import HomemFoguete from '../../assets/images/01.png';
import DevSites from '../../assets/images/icons/1.png';
import DevApps from '../../assets/images/icons/2.png';


class Home extends Component{
    render(){
        return(
            <main>
            <Bgwrapper>
                <Flexcontainer>
                    <Col>
                        <BoxTextTop>
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

            <SectionWhite>
                <Flexcontainer>
                    <Col>
                        <BoxTextMid>
                            <BoxTextMidTxt
                                titulo="O que fazemos?"
                                descricao={["Focamos nosso desenvolvimento", <br/>, "nas", <strong> suas necessidades.</strong>, " 🤗"]}
                            />
                        <Link to="/sobre-nos/" className="btn full">Conheça Nossa Agência!</Link>
                        </BoxTextMid>
                    </Col>

                    <Col>
                        <GridBox>
                            <div className="item">
                                <BoxServicosTxt
                                    boxColor="bgserv1"
                                    imagem={[DevSites]}
                                    titulo="Desenvolvimento de Web Sites"
                                    descricao="Sites Responsivos e Administráveis com Wordpress, sistema de chat, Whatsapp, Analytics e mais."
                                />
                            </div>
                            <div className="item">
                                <BoxServicosTxt
                                    boxColor="bgserv2"
                                    imagem={[DevApps]}
                                    titulo="Desenvolvimento de Apps"
                                    descricao="Aplicativos multi plataformas com agilidade e qualidade com o custo reduzido focado na conversão que você precisa."
                                />
                            </div>
                        </GridBox>
                    </Col>
                </Flexcontainer>
            </SectionWhite>
            </main>
        );
    }
}

export default Home;

{/* <section class="section-white">
<div class="flex-container">
    <div class="col">
        <div class="boxTextMid">
            <div class="detalheleftcolor"></div>
            <h2>O que fazemos?</h2>
            <h3>Focamos nosso desenvolvimento <br>
                nas <strong>suas necessidades.</strong> 🤗</h3>
            <a href="" class="btn full">Conheça Nossa Agência!</a>
        </div>
    </div>
    <div class="col">
        <div class="gridBox">
            <div class="item">
                <div class="boxServicos bgserv1">
                    <img src="assets/images/icons/1.png" alt="Desenvolvimento de Sites">
                    <span>Desenvolvimento
                            de Web Sites</span>
                    <p>Sites Responsivos e Administráveis
                            com Wordpress, sistema de chat,
                            Whatsapp, Analytics
                            e mais...</p>
                </div>
            </div>
            <div class="item">
                <div class="boxServicos bgserv2">
                    <img src="assets/images/icons/2.png" alt="Desenvolvimento de Apps Híbridos">
                    <span>Desenvolvimento
                            de Apps</span>
                    <p>Aplicativos multi plataformas com
                            agilidade e qualidade com o custo
                            reduzido focado na conversão que você precisa.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}

