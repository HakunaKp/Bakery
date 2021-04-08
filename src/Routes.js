import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import Order from './pages/Order';
import PickUp from './pages/PickUp';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Success from './pages/Success';
import Account from './pages/Account';
import history from './components/History';

export default class Routes extends Component {  
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/order' exact component={Order} />
          <Route path='/pickup' exact component={PickUp} />
          <Route path='/cart/:date/:time' component={Cart} />
          <Route path='/checkout/:date/:time' component={Checkout} />
          <Route path='/success' exact component={Success} />
          <Route path='/account' exact component={Account} />
          <Route path='*' exact component={Error} />
        </Switch>
      </Router>
    )
  }
}

