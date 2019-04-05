import React from 'react';
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
                <i class="fa fa-play" />
                &nbsp; Copyright
              </button>
              <button>
                Sign up Now &nbsp;
                <i class="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="product__carousel">
          <div className="carousel__bg" />
          <div className="carousel__bg-two" />
          <div className="carousel__content">
            <div className="carousel__inner">
              <h1>
                <i class="fa fa-recycle" />
                &nbsp; Recycling
              </h1>
              <span>You can do your part for Earth.</span>
              <p>
                Recycling can be an easier process than it first seems. There are many ways to contribute to the
                recycling process by following a few easy steps.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className="carousel__links">
            <ul className="carousel__list">
              <li className="active" />
              <li />
              <li />
            </ul>
          </div>
        </div>
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
                <i class="fa fa-angle-right" />
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
                <i class="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
