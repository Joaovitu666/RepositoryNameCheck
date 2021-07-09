import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Repository from './pages/Repository/index';
import Home from './pages/Home/Index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Repository' component={Repository} />
            </Switch>

        </BrowserRouter>

    );
}