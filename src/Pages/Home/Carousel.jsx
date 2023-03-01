import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://progresssoft.imgix.net/blogs/debunking-blood-donation-myths-en.png"
              alt="Third slide"
            />
            <div className=" carousel-caption d-none d-md-block">
              <h1 className="text-3xl font-bold text-white-700">
                A blood bag in time saves a life{" "}
              </h1>
              <p className="text-xl font-semibold text-white-800">
                People with blood group O type are known as universal donors as
                they can donate blood to people of other blood types too{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              className="d-block w-100"
              src="https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg"
              alt="First slide"
            />
            <div className=" carousel-caption d-none d-md-block">
              <h1 className="text-3xl font-bold text-white-700">
                Donate Blood
              </h1>
              <p className="text-xl font-semibold text-white-800">
                Donate blood. Not on roads but in blood donation camps{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.jainuniversity.ac.in/uploads/blog/1e47845a74d7a5c24cd6c0b7be23b4ee.jpg"
              alt="Second slide"
            />
            <div className=" carousel-caption d-none d-md-block">
              <h1 className="text-3xl font-bold text-white-700">
                Stay fit and eat right and donate blood
              </h1>
              <p className="text-xl font-semibold text-white-800">
                Saving a life won’t cost you anything. Go ahead and donate blood
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
