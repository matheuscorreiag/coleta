import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing/landing';
import About from './pages/About/about';
import Search from './pages/Search/search';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import CompleteRegister from './pages/CompleteRegister/completeregister';
import SearchResults from './pages/SearchResults/searchresults';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Landing} />
                <Route path='/about' exact={true} component={About} />
                <Route path='/search' exact={true} component={Search} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/register' exact={true} component={Register} />
                <Route path='/completeregister' exact={true} component={CompleteRegister} />
                <Route path='/searchresults' exact={true} component={SearchResults} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;