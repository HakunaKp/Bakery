import React from 'react';
import GenericSection from '../components/sections/GenericSection';

import PickupContent from '../components/order/PickUp';
import CartContent from '../components/order/Cart';
import CheckoutContent from '../components/order/Checkout';

class Cart extends React.Component {

  render() {
/*
    const genericSection03Header = {
      title: 'Cart Form',
      paragraph: 'Each order is delicately prepared to fit the needs of your occasion. Monica pays close attention to fine details and works carefully with clients to prepare deserts that everyone can enjoy.'
    }
    const genericSection04Header = {
      title: 'Checkout Form',
      paragraph: 'Each order is delicately prepared to fit the needs of your occasion. Monica pays close attention to fine details and works carefully with clients to prepare deserts that everyone can enjoy.'
    }
    const genericSection05Header = {
      title: 'Success Form',
      paragraph: 'Each order is delicately prepared to fit the needs of your occasion. Monica pays close attention to fine details and works carefully with clients to prepare deserts that everyone can enjoy.'
    }
*/
    return (
      <React.Fragment>
        <GenericSection topDivider className="center-content">
          <PickupContent />
        </GenericSection>
        <GenericSection topDivider className="center-content">
          <CartContent />
        </GenericSection>
        <GenericSection topDivider className="center-content">
          <CheckoutContent />
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Cart;