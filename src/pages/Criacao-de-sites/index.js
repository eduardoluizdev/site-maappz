import React, { Component } from 'react';

import SeoInfos from '../../componets/Seo';

import BannerTopo from '../Home/BannerTopo';
import BoxTextMidTxt from '../Home/SobreProps';
import CriacaoProcesso from './Processo';

import { Chat } from 'styled-icons/boxicons-regular/Chat';
import { ListCheck } from 'styled-icons/boxicons-regular/ListCheck';
import { Layout } from 'styled-icons/boxicons-regular/Layout';
import { Laptop } from 'styled-icons/boxicons-regular/Laptop';


import BreadCriacaodeSites from '../../componets/Breadcrumbs/breadSites';

import { Bgwrapper, Flexcontainer, Col, BoxTextTop, BoxImgTop, SectionWhite, GridBox, BoxTextMid, ChamadaTextColor, Detalherightcolor } from '../Home/styles';
import { BoxServicosFull } from './styles';

import DestaqueHomeBanner from '../../assets/images/img-sites.png';

import CTAContato from '../../componets/CTAContato';

class CriacaodeSites extends Component{
    render(){
        return(
            <main>
                <SeoInfos
                title="Criação de Sites - Maappz Criação de Sites"
                description="Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante para você!"
                keywords="Criação de sites, Sites, Web Site, Criar Sites, Web Design, Web Designer, Web Master, Desenvolvimento, Desenvolvimento de Sites, Front-end, Back-end, ReactJS, Criação de Sites RJ, Criação de Sites Rio de Janeiro, Criação de Sites no Rio de Janeiro"
                canonical="https://www.maappz.com.br/sobre-nos/"
                />
                <Bgwrapper>
                <Flexcontainer>
                    <Col>
                        <BoxTextTop>
                            <BannerTopo
                                servico="#SEUNEGÓCIOONLINE"
                                titulo="Criação de Sites"
                                destaqueTitulo=""
                                descricao="Nosso desenvolvimento tem como foco seu público alvo, priorizando sempre o mais imporante"
                                destaqueDescricao="para você! 👊"
                                />
                            {/* <Link to="/" className="btn">Solicite seu Orçamento!</Link> */}
                            <a href="http://bit.ly/maappzorcamento" target="_blank" rel="noopener noreferrer" className="btn">Solicite seu Orçamento!</a>
                        </BoxTextTop>
                    </Col>

                    <Col>
                        <BoxImgTop>
                            <img src={DestaqueHomeBanner} alt="Imagem sobre progresso e sucesso!"/>
                        </BoxImgTop>
                    </Col>
                </Flexcontainer>
            </Bgwrapper>

            <BreadCriacaodeSites></BreadCriacaodeSites>

            <SectionWhite>
                <Flexcontainer>
                    <Col>
                        <BoxTextMid>
                            <BoxTextMidTxt
                                titulo="Porque Escolher a Maappz?"
                                descricao="Focamos nosso desenvolvimento no que realmente importa,"
                                destaqueDescricao="Conversão! 👊"
                            />
                        </BoxTextMid>
                    </Col>

                    <Col>
                        <GridBox>
                            <BoxServicosFull className="bgserv3">
                            <strong>Entenda o que podemos fazer por você!</strong>
								<p>Analise nosso portfólio, te convido a ter uma conversa com o nosso desenvolvedor totalmente sem compromisso para tirar suas dúvidas. Ter um site em pleno século 21 é mais que essencial para qualquer empresa se posicionar no mercado e com total entendimento e planejamento você consegue todos os resultados desejados. <br/>
									<br/> Nós não só avaliamos seu quadro de necessidades como também te ajudamos a definir métricas e objetivos.</p>
                            </BoxServicosFull>
                        </GridBox>
                    </Col>
                </Flexcontainer>
            </SectionWhite>

            <Flexcontainer>
                <ChamadaTextColor>
                    <h2>Como Funciona a Criação de um Site?</h2>
			        <p>Ajudamos na sua caminha para o sucesso.</p>
                    <Detalherightcolor></Detalherightcolor>
                </ChamadaTextColor>
            </Flexcontainer>

            <Flexcontainer>
                <CriacaoProcesso
                    boxColor="bgserv1"
                    imagem={<Chat/>}
                    titulo="Briefing"
                    descricao="Nesse momento, nós perguntaremos a você todas as minúcias que envolvem o mercado que o site engloba, abrangendo questões sobre concorrência, logística, produtos, serviços, público-alvo e outros detalhes importantes."
                />
                <CriacaoProcesso
                    boxColor="bgserv2"
                    imagem={<ListCheck/>}
                    titulo="Estudo e Planejamento"
                    descricao="Com o briefing em mãos, realizamos o planejamento para a criação do site estudamos todas as informações e observações passadas por você. E assim, entregamos ao você o um protótipo do projeto sinalizamos todos os pontos imporantes."
                />
                <CriacaoProcesso
                    boxColor="bgserv2"
                    imagem={<Layout/>}
                    titulo="Criação de Layout"
                    descricao="Buscamos toda a essencia do seu empreendimento para o seu público algo. Por isso, essa é a hora de vida e realidade ao projeto, em que cada página é devidamente pensada para trazer coerência à usabilidade do site."
                />
                <CriacaoProcesso
                    boxColor="bgserv1"
                    imagem={<Laptop/>}
                    titulo="Desenvolvimento"
                    descricao="Após a aprovação da layout, iniciamos o desenvolvimento do site. E esse é mais um ponto importante para o projeto, onde aplicamos as últimas tecnologias em programação, partimos do absoluto zero e damos vida ao seu projeto."
                />
            </Flexcontainer>

            <CTAContato/>





            </main>
        );
    }
}

export default CriacaodeSites;
