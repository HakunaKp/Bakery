import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import SuccessPage from '../components/order/Success';


class Success extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {
/*
    const genericSection05Header = {
      title: 'Success Form',
      paragraph: 'Each order is delicately prepared to fit the needs of your occasion. Monica pays close attention to fine details and works carefully with clients to prepare deserts that everyone can enjoy.'
    }
*/
    return (
      <React.Fragment>
        <GenericSection topDivider className="center-content">
          <SuccessPage />
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Success;