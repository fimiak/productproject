import React from 'react';
import '../../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__box">
          <h1>About Us</h1>
          <p>
            Recycling is an important enough activity that we feel it is important to share how and when to recycle to
            the whole world. If you have questions or concerns about recycling, please contact us at the email address
            below.
          </p>
          <a href="/">
            Contact Us &nbsp;
            <i class="fa fa-angle-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
