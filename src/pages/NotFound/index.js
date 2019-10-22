import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { Flexcontainer, } from '../Home/styles';
import { NoteFoundPage } from './styles';
import BreadNFound from '../../componets/Breadcrumbs/breadNF';

import imgnotfound from '../../assets/images/404.svg';


class NotFound extends Component{
    render(){
        return(
            <main>
                <BreadNFound/>
                <Flexcontainer>
                    <NoteFoundPage>
                        <img src={imgnotfound} alt="Página não encontrada!"/>
                        <h1>Pagina não encontrada</h1>
                        <Link to="/" title="Criação de Sites">Ir para a página inicial!</Link>
                    </NoteFoundPage>
                </Flexcontainer>
            </main>
        );
    }
}

export default NotFound;
