import React from 'react';

class Pricing extends React.Component {
  render() {
    return (
      <div className="pricing">
        <div className="pricing__top">
          <div className="pricing__top-bg" />
          <div className="pricing__top-content">
            <div className="pricing_title">
              <span>Pricing</span>
              <h2>Pricing Plans to Fit All Company Needs</h2>
            </div>

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
        <div className="pricing__features">
          <table>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>Solo</td>
                <td>Group</td>
                <td>Enterprise</td>
              </tr>
              <tr className="pricing__spacer">
                <td colspan="4">Plan</td>
              </tr>
              <tr>
                <td>Pick your plan</td>
                <td className="pricing__icon">&#10086;</td>
                <td className="pricing__icon">&#10086;</td>
                <td className="pricing__icon">&#10086;</td>
              </tr>
              <tr className="pricing__spacer">
                <td colspan="4">Features</td>
              </tr>
              <tr>
                <td>Single Sign-On</td>
                <td>&nbsp;</td>
                <td className="pricing__icon">&#10086;</td>
                <td className="pricing__icon">&#10086;</td>
              </tr>
              <tr>
                <td>Broadcast</td>
                <td>&nbsp;</td>
                <td className="pricing__icon">&#10086;</td>
                <td className="pricing__icon">&#10086;</td>
              </tr>
              <tr>
                <td>Wireless</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className="pricing__icon">&#10086;</td>
              </tr>
              <tr>
                <td>Email Support</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className="pricing__icon">&#10086;</td>
              </tr>
              <tr>
                <td>Plan</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Contact</td>
              </tr>
              <tr className="pricing__spacer">
                <td colspan="4">&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <h4>Get started</h4>
                  <span className="pricing__features-text">Try a plan to get started immediately</span>
                </td>
                <td>
                  <h4>Solo</h4>
                  <button>Create Account</button>
                </td>
                <td>
                  <h4>Group</h4>
                  <button>Try Free</button>
                </td>
                <td>
                  <h4>Enterprise</h4>
                  <button>Contact Us</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pricing__faq">
          <h2>Frequently Asked Questions</h2>
          <div className="pricing__faq-items">
            <p>
              <h5>How does it work?</h5>If you are on the monthly billing plan, your bill may fluctuate. Includes Even
              More Stuff.
            </p>
            <p>
              <h5>How much does it cost?</h5>If you are on the monthly billing plan, your bill may fluctuate. Includes
              Even More Stuff.
            </p>
            <p>
              <h5>Where are you located?</h5>If you are on the monthly billing plan, your bill may fluctuate. Includes
              Even More Stuff.
            </p>
            <p>
              <h5>Can I get a refund?</h5>If you are on the monthly billing plan, your bill may fluctuate. Includes Even
              More Stuff.
            </p>
          </div>
          <button>See the Full FAQ</button>
        </div>
      </div>
    );
  }
}

export default Pricing;
