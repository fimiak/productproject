import React from 'react';

function Footer() {
  return (
    <footer class="footer">
      <div className="footer__heading">
        <span>&#9851; Recycle</span>
        <span>
          <input placeholder="Enter Email Address" />
          <button>Try Now</button>
        </span>
      </div>
      <div className="footer__list">
        <div className="footer__list-box">
          <ul>
            <li>
              <h4>Business</h4>
            </li>
            <li>
              <a href="/">Warehouses</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
          </ul>
          <span>&copy;2019 Recycle</span>
        </div>
        <div className="footer__list-box">
          <ul>
            <li>
              <h4>Developers</h4>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Partner Portal</a>
            </li>
          </ul>
          <span>
            <a href="/">
              <i class="fab fa-facebook-square fa-lg" />
            </a>
            &nbsp;
            <a href="/">
              <i class="fab fa-twitter-square fa-lg" />
            </a>
            &nbsp;
            <a href="/">
              <i class="fab fa-linkedin fa-lg" />
            </a>
            &nbsp;
            <a href="/">
              <i class="fas fa-address-card fa-lg" />
            </a>
          </span>
        </div>
        <div className="footer__list-box">
          <ul>
            <li>
              <h4>For Business</h4>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Partner Portal</a>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Partner Portal</a>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <ul>
            <li>
              <h4>Support</h4>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Partner Portal</a>
            </li>
          </ul>
          <span>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
