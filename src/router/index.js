import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '@/store';
import asyncComponent from '@/utils/asyncComponent';

import App from '@/pages/App';
import Notfund from '@/pages/notfund';
const Counter = asyncComponent(() => import('../pages/counter/counter'));

export default class RouteConfig extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/home" exact component={App} />
            <Route path="/counter" component={Counter} />
            <Route component={Notfund} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
