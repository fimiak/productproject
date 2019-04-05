import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 0
    };
  }

  onClick = int => {
    const contentList = Array.from(document.getElementsByClassName('carousel__content')[0].childNodes);
    const list = Array.from(document.getElementsByClassName('carousel__list')[0].childNodes);
    list.forEach(item => item.classList.remove('active'));
    list[int].classList.add('active');
    setTimeout(() => contentList.forEach(item => item.classList.remove('active')), 250);
    setTimeout(() => contentList[int].classList.add('active'), 250);

    contentList.forEach(item => item.classList.add('fade'));
    setTimeout(() => contentList.forEach(item => item.classList.remove('fade')), 350);
  };

  render() {
    return (
      <div className="product__carousel">
        <div className="carousel__bg" />
        <div className="carousel__bg-two" />
        <div className="carousel__content">
          <div className={'carousel__inner active'}>
            <h1>
              <i className="fa fa-recycle" />
              &nbsp; Recycling
            </h1>
            <span>You can do your part for Earth.</span>
            <p>
              Recycling can be an easier process than it first seems. There are many ways to contribute to the recycling
              process by following a few easy steps.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className={'carousel__inner'}>
            <h1>
              <i className="fa fa-book" />
              &nbsp; Recycle
            </h1>
            <span>Learn more about recycling.</span>
            <p>
              Learn more about the recycling programs available in your area. Track recycling policy and local
              pro-recycling politicians. Click below to find out more information.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className={'carousel__inner'}>
            <h1>
              <i className="fa fa-toilet-paper" />
              &nbsp; Reuse
            </h1>
            <span>If you have any more questions.</span>
            <p>
              Recycle now if you want to see everything available to offer. More data will be available about the
              recycling process in the near future.
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
        <div className="carousel__links">
          <ul className="carousel__list">
            <li className="active" onClick={() => this.onClick(0)} />
            <li onClick={() => this.onClick(1)} />
            <li onClick={() => this.onClick(2)} />
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
