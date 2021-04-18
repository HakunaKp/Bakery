import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';

// Views 
import Home from './views/Home';
import Portfolio from './views/Portfolio';

import Order from './views/Order';
import Cart from './views/Cart';
import Success from './views/Success';

// Amplify
import Amplify from 'aws-amplify';

// Amplify Configurations
import awsExports from './aws-exports';
Amplify.configure(awsExports);

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/portfolio" component={Portfolio} layout={LayoutAlternative} />
            <AppRoute exact path="/order" component={Order} layout={LayoutDefault} />
            <AppRoute exact path="/cart" component={Cart} layout={LayoutAlternative} />
            <AppRoute exact path="/success" component={Success} layout={LayoutDefault} />
          </Switch>
        )
      } />
    );
  }
}

export default withRouter(props => <App {...props} />);