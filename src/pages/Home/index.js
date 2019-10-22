import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SeoInfos from './seo';

import BannerTopo from './BannerTopo';
import BoxTextMidTxt from './SobreProps';
import BoxServicosTxt from './SobreBoxProps';
import BoxDiferencialItem from './BoxDiferencialItem';

import Depoimentos from './Depoimentos';
import Clientes from './Clientes';
import CTAContato from '../../componets/CTAContato';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Bgwrapper, Flexcontainer, Col, BoxTextTop, BoxImgTop, SectionWhite, GridBox, BoxTextMid, ChamdaText, Detalheright, FlexContainerGrid, ChamadaTextColor, Detalherightcolor } from './styles';

import DestaqueHomeBanner from '../../assets/images/img-home.svg';
import DevSites from '../../assets/images/web.svg';
import DevApps from '../../assets/images/app.svg';


class Home extends Component{
    render(){
        return(
            <main>
            <SeoInfos 
                title="Home - Maappz Criação de Sites"
                description="Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante para você!"
                keywords="Criação de sites, Sites, Web Site, Criar Sites, Web Design, Web Designer, Web Master, Desenvolvimento, Desenvolvimento de Sites, Front-end, Back-end, ReactJS, Criação de Sites RJ, Criação de Sites Rio de Janeiro, Criação de Sites no Rio de Janeiro"
                canonical="https://www.maappz.com.br/"
            />
            <Bgwrapper>
                <Flexcontainer>
                    <Col>
                        <BoxTextTop>
                            <BannerTopo
                                servico="Desenvolvimento de Sites"
                                titulo="Uma solução personalizada para o"
                                destaqueTitulo="seu negócio!"
                                descricao="Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante"
                                destaqueDescricao="para você! 👊"
                                />
                            {/* <Link to="/" className="btn">Solicite seu Orçamento!</Link> */}
                            <a href="http://bit.ly/maappzorcamento" target="_blank" rel="noopener noreferrer" className="btn">Solicite seu Orçamento!</a>
                        </BoxTextTop>
                    </Col>

                    <Col>
                        <BoxImgTop>
                            <LazyLoadImage
                            alt="Imagem sobre progresso e sucesso!"
                            height="500"
                            effect="blur"
                            src={DestaqueHomeBanner}
                            width="500" />
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
                                descricao="Focamos nosso desenvolvimento"
                                destaqueDescricao=" nas suas necessidades. 🤗"
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

            <Bgwrapper className="bg-dif">
                <Flexcontainer>
                    <ChamdaText>
                        <h2>Nossos Diferenciais</h2>
                        <p>Nossa preocupação é com o que você precisa!</p>
                        <Detalheright></Detalheright>
                    </ChamdaText>
                </Flexcontainer>

                <FlexContainerGrid>
                    <BoxDiferencialItem
                        number="1"
                        titulo="Valorizamos Seu Dinheiro"
                        descricao="Converse com o nosso especialista para entender sua real necessidade sem gastar nada a mais por isso."
                    />
                    <BoxDiferencialItem
                        number="2"
                        titulo="Credibilidade"
                        descricao="Visite nossos cases para entender como trabalhamos e ter uma ideia da nossa qualidade."
                    />
                    <BoxDiferencialItem
                        number="3"
                        titulo="Preço Justo"
                        descricao="Nosso foco é a qualidade do projeto visando atender todas as suas necessidades."
                    />
                    <BoxDiferencialItem
                        number="4"
                        titulo="Agilidade"
                        descricao="Focamos em um desenvolvimento ágil e com qualidade por possuímos nossa próprimas ferramentas."
                    />
                    <BoxDiferencialItem
                        number="5"
                        titulo="Design Exclusivo"
                        descricao="Focamos em ter projetos com designs unicos e exclusivos por isso desenhamos todos os nosso projetos do zero."
                    />
                    <BoxDiferencialItem
                        number="6"
                        titulo="Otimizado"
                        descricao="Todos os nossos produtos são otimizados para todas as plataformas de busca com foco organico."
                    />
                </FlexContainerGrid>
            </Bgwrapper>

            <Flexcontainer>
                <ChamadaTextColor>
                    <h2>Depoimentos</h2>
                    <p>O que nossos clientes falam :)</p>
                    <Detalherightcolor></Detalherightcolor>
                </ChamadaTextColor>
            </Flexcontainer>

            <Depoimentos/>

            <Flexcontainer>
                <ChamadaTextColor>
                    <h2>Nossos Clientes</h2>
			        <p>Sonhamos junto <strong>com você </strong>:)</p>
                    <Detalherightcolor></Detalherightcolor>
                </ChamadaTextColor>
            </Flexcontainer>

            <FlexContainerGrid>
                <Clientes/>
            </FlexContainerGrid>

            <CTAContato/>


            </main>
        );
    }
}

export default Home;
