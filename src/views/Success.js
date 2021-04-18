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