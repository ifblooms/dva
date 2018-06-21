import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Nav from './components/Nav';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <div>
      <Nav></Nav>
      <Router history={history}>
        <Switch>
          
          <Route path="/" exact component={IndexPage} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
