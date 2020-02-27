import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route
                            component={Checkout}
                            path="/checkout"
                        />
                        <Route
                            component={Orders}
                            path="/orders"
                        />
                        <Route
                            component={BurgerBuilder}
                            exact
                            path="/"
                        />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
