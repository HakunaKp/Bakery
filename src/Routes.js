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
import history from './components/History';

export default class Routes extends Component {  
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/order/' component={Order} />
          <Route path='/pickup/:id' component={PickUp} />
          <Route path='/cart/' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    )
  }
}

