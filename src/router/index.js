import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@/pages/App';
import Notfund from '@/pages/notfund';
import Counter from '@/pages/counter/counter';

import { Provider } from 'react-redux';
import store from '@/store';

export default class RouteConfig extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/home" exact component={App} />
            <Route path="/counter" exact component={Counter} />
            <Route component={Notfund} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
