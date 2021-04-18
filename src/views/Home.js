import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroSplit from '../components/sections/HeroSplit';
import GenericSection from '../components/sections/GenericSection';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
// import some required elements
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';

import Video from '../assets/video.mp4';

class Home extends React.Component {

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

    const genericSection01Header = {
      title: 'Crafted exclusively for you',
      paragraph: 'Each order is delicately prepared to fit the needs of your occasion. Monica pays close attention to fine details and works carefully with clients to prepare deserts that everyone can enjoy.'
    }

    return (
      <React.Fragment>
        <HeroSplit className="illustration-section-01" />
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection01Header} className="reveal-from-bottom" />
          <div className="reveal-from-bottom">
            <a
              data-video={Video}
              href="#0"
              aria-controls="video-modal"
              onClick={this.openModal}
            >
              <Image
                src={require('./../assets/images/video-placeholder.svg')}
                alt="Video"
                width={712}
                height={400} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={this.state.videoModalActive}
            handleClose={this.closeModal}
            video={Video}
            videoTag="iframe" />
        </GenericSection>         
        <FeaturesTiles topDivider className="center-content" />
        <Testimonial topDivider />  
      </React.Fragment>
    );
  }
}

export default Home;