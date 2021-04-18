import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import PickupContent from '../components/order/PickUp';
import CartContent from '../components/order/Cart';
import CheckoutContent from '../components/order/Checkout';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

class Cart extends React.Component {

  render() {

    return (
      <React.Fragment>
        <AmplifyAuthenticator>
          <GenericSection topDivider className="center-content">
            <PickupContent />
          </GenericSection>
          <GenericSection topDivider className="center-content">
            <CartContent />
          </GenericSection>
          <GenericSection topDivider className="center-content">
            <CheckoutContent />
          </GenericSection>
        </AmplifyAuthenticator>
      </React.Fragment>
    );
  }
}

export default Cart;