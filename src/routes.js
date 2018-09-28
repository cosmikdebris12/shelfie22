import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

export default(
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form} />
        <Route path='/edit:id' component={Form} />
    </Switch>
)
