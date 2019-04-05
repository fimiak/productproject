import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import '../../styles/Product.css';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div className="product__heading">
          <div>
            <h1>Recycling done right</h1>
            <p>
              Bring unused metals and plastics. <br />
              No hassle for you, we accept all returns.
            </p>
            <div>
              <button className="button-white">
                <i className="fa fa-play" />
                &nbsp; Youtube
              </button>
              <button>
                Sign up Now &nbsp;
                <i className="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <Carousel />
        <div className="product__outro">
          <div className="product__outro_container">
            <div className="product__outro_container_box">
              <h2>Learn More About Recycling</h2>
              <p>
                Recycling can be an easier process than it first seems. There are many ways to contribute to the
                recycling process by following a few easy steps.
              </p>
              <a href="/">
                Learn More &nbsp;
                <i className="fa fa-angle-right" />
              </a>
            </div>
            <div className="product__outro_container_box">
              <h2>Hassle-free billing</h2>
              <p>
                Recycling can be an easier process than it first seems. There are many ways to contribute to the
                recycling process by following a few easy steps.
              </p>
              <a href="/">
                Learn More &nbsp;
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
