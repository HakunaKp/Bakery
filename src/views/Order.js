import React from 'react';
// import section header
//import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import GenericSection from '../components/sections/GenericSection';

import OrderContent from '../components/order/Order';

class Order extends React.Component {

  render() {
  
    return (
      <React.Fragment>
        <GenericSection topDivider className="center-content">
          <OrderContent />
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Order;