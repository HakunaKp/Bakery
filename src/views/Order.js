import React from 'react';
import OrderContent from '../components/order/Order';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

class Order extends React.Component {

  render() {
  
    return (
      <React.Fragment>
        <AmplifyAuthenticator>
          <OrderContent />
        </AmplifyAuthenticator>
      </React.Fragment>
    );
  }
}

export default Order;