import React from 'react';
import OrderContent from '../components/order/Order';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import GenericSection from '../components/sections/GenericSection';

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