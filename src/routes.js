import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Hoc/Layout';

import Home from './Components/home';

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Layout>
    )
};

export default Routes;
