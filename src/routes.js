import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './Components/header'
import Erro from './pages/Erro/';
import Filme from './pages/filme/'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route exact path='/filme/:id' component={Filme} />
                <Route path='*' component={Erro} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;