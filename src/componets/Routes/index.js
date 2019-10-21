import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import CriacaodeSites from '../../pages/Criacao-de-sites';
import Contato from '../../pages/Contato';

import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyle } from '../../global';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const Routes = () => {
    return(
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Header />
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={100}  classNames="fade">
                        <Switch location={location}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/sobre-nos" component={Sobre}/>
                            <Route exact path="/criacao-de-site" component={CriacaodeSites}/>
                            <Route exact path="/contato" component={Contato}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
            <Footer />
        </BrowserRouter>
    );
}
export default Routes;