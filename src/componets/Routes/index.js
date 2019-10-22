import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import CriacaodeSites from '../../pages/Criacao-de-sites';
import NotFound from '../../pages/NotFound';

import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyle } from '../../global';

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <GlobalStyle></GlobalStyle>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/sobre-nos/" component={Sobre}/>
                    <Route exact path="/criacao-de-sites/" component={CriacaodeSites}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}
export default Routes;