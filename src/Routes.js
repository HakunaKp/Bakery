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
          <Route path='/home' exact component={Home} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/order/' exact component={Order} />
          <Route path='/pickup/:id' component={PickUp} />
          <Route path='/cart/:id/:date/:time' component={Cart} />
          <Route path='/checkout/:id/:date/:time' component={Checkout} />
          <Route path='*' exact component={Home} />
        </Switch>
      </Router>
    )
  }
}

