import React from 'react';

class Pricing extends React.Component {
  render() {
    return (
      <div className="pricing">
        <div className="pricing__top">
          <div className="pricing__top-bg" />
          <div className="pricing__top-content">
            <ul className="pricing__cards">
              <li className="pricing__card">
                <span>&#9851;</span>
                <h2>Solo</h2>
                <h4>Free</h4>
                <ul>
                  <li>Reducing</li>
                  <li>Reusing</li>
                  <li>Recycling</li>
                </ul>
                <button>Create Account</button>
              </li>
              <li className="pricing__card">
                <span>&#9851;</span>
                <h2>Group</h2>
                <h4>$19.99/mo.</h4>
                <ul>
                  <li>Reducing</li>
                  <li>Reusing</li>
                  <li>Recycling</li>
                  <li>Includes More Stuff</li>
                </ul>
                <button>Free Trial</button>
              </li>
              <li className="pricing__card">
                <span>&#9851;</span>
                <h2>Enterprise</h2>
                <h4>$39.99/mo.</h4>
                <ul>
                  <li>Reducing</li>
                  <li>Reusing</li>
                  <li>Recycling</li>
                  <li>Includes More Stuff</li>
                  <li>Includes Even More Stuff</li>
                  <li>Unlimited Stuff</li>
                </ul>
                <button>Get In Touch</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="pricing__features">Features</div>
        <div className="pricing__faq">FAQ</div>
      </div>
    );
  }
}

export default Pricing;
