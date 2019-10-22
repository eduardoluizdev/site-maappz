import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

import SeoInfos from './seo';

import BannerTopo from '../Home/BannerTopo';
import Infos from './Infos';

import BoxDiferencialItem from '../Home/BoxDiferencialItem';


import { Bgwrapper, Flexcontainer, Col, BoxTextTop, BoxImgTop, SectionWhite, ChamdaText, FlexContainerGrid, Detalheright } from '../Home/styles';

import { TextoSobre } from './styles';

import DestaqueHomeBanner from '../../assets/images/img-sobre.png';

import CTAContato from '../../componets/CTAContato';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BreadSobre from '../../componets/Breadcrumbs/breadSobre'


class Sobre extends Component{

    render(){
        return(
            <main>
                <SeoInfos
                title="Sobre Nós - Maappz Criação de Sites"
                description="Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante para você!"
                keywords="Criação de sites, Sites, Web Site, Criar Sites, Web Design, Web Designer, Web Master, Desenvolvimento, Desenvolvimento de Sites, Front-end, Back-end, ReactJS, Criação de Sites RJ, Criação de Sites Rio de Janeiro, Criação de Sites no Rio de Janeiro"
                canonical="https://www.maappz.com.br/sobre-nos/"
                />
                <Bgwrapper>
                <Flexcontainer>
                    <Col>
                        <BoxTextTop>
                            <BannerTopo
                                servico="#CONHEÇAAMAAPZ"
                                titulo="Sobre Nossa Empresa"
                                destaqueTitulo=""
                                descricao="Conheça um pouco da nossa trajetória antes de contratar nossos serviços!"
                                destaqueDescricao=""
                                />
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

            <BreadSobre/>

            <SectionWhite>
                <Flexcontainer>
                    <TextoSobre>
                        <p>A <strong>Maappz</strong> nasceu junto com a nossa bebezinha Maria Alice, que foi a inspiração para o nosso nome, hoje somos compostos por uma equipe de desenvolvedores e vários parceiros. Nosso foco está em ajudar a quem está chegando ao mundo digital agora e não faz a mínima ideia do que fazer.</p>
                        <p>Nosso foco principal é o nosso cliente, onde montamos toda a estratégia digital, desde a criação do site e da definição do público-alvo, até a execução e análise dos resultados para garantir que seu negócio está no caminho certo. Nosso DNA é flexível, podemos nos moldar ao ritmo de cada cliente sempre oferecendo o melhor da tecnologia para facilitar processos com foco total na sua conversão.</p>
                    </TextoSobre>
                </Flexcontainer>
            </SectionWhite>

            <Flexcontainer>
                <Infos
                    titulo="Nossa Missão"
                    descricao="Construir uma relação de parceria com o nosso cliente e ajudar no que for possível para o seu sucesso profissional."
                />
                <Infos
                    titulo="Nossa Visão"
                    descricao="Sermos lembrados pela nossa qualidade e agilidade nos serviços."
                />
                <Infos
                    titulo="Nossos Valores"
                    descricao="Profissionalismo; Transparência; Comprometimento; Ética Profissional; Inovação;"
                />
            </Flexcontainer>

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



            <CTAContato/>
            </main>
        );
    }
}

export default Sobre;
