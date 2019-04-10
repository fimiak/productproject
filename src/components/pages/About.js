import React from 'react';
import '../../styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__title">
          <h1>Recycling done right</h1>
          <p>
            Bring unused metals and plastics. <br />
            No hassle for you, we accept all returns.
          </p>
        </div>
        <div className="about__bg" />
        <div className="about__bg-two" />
        <div className="about__box">
          <h1>
            <i className="fa fa-mail-bulk" />
            &nbsp; Welcome
          </h1>
          <p>
            This is a website built to demonstrate the use of HTML, SASS, React and Javascript to create a production
            ready website. If you have questions or concerns about the website's architecture, please contact me at the
            email address below.
          </p>
          <a href="mailto:tylergreve@gmail.com">
            Contact Us &nbsp;
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
