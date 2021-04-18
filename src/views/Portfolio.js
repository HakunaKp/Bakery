import React from 'react';
// import sections
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';

class Portfolio extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {  

    return (
      <React.Fragment>
        <FeaturesSplit invertMobile topDivider imageFill />
        <Team topDivider /> 
      </React.Fragment>
    );
  }
}

export default Portfolio;