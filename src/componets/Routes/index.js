import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../../pages/Home';

import Header from '../Header';
import Footer from '../Footer';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
export default Routes;