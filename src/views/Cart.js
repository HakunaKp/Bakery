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
        <GenericSection topDivider className="center-content">
          <AmplifyAuthenticator>
              <PickupContent />
            <GenericSection topDivider className="center-content">
              <CartContent />
            </GenericSection>
            <GenericSection topDivider className="center-content" />
              <CheckoutContent />
            <GenericSection bottomDivider className="center-content" />
          </AmplifyAuthenticator>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Cart;