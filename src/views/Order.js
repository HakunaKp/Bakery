import React from 'react';
import OrderContent from '../components/order/Order';
import GenericSection from '../components/sections/GenericSection';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

class Order extends React.Component {

  render() {
  
    return (
      <React.Fragment>
        <GenericSection className="center-content">
          <AmplifyAuthenticator>
            <OrderContent />
          </AmplifyAuthenticator>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Order;