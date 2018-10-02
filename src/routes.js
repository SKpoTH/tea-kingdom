import React from 'react';
import {Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/login" component={Login} />
    </Router>
);

export default Routes;