import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="mt-2 container-fluid">
        <Carousel />

        <h1 className="sm:text-5xl text-4xl mt-5 font-black title-font mb-4 text-gray-900">
          More Ways You Can{" "}
          <span className="text-red-700">Make a Difference </span>{" "}
        </h1>
        <div className="row m-3">
          <div className="col-md-4 p-4">
            {" "}
            <img
              src="https://www.redcrossblood.org/content/dam/redcrossblood/home-page-images/Blood_Mobile.jpg.transform/1288/q82/feature/image.jpeg"
              className="img-fluid"
              alt="Responsive image"
            />
            <h1 className="sm:text-xl text-xl mt-2 font-black title-font text-left mb-4 text-gray-900">
              Host Blood Camps
            </h1>
          </div>
          <div className="col-md-4 p-4">
            {" "}
            <img
              src="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/ARC_Volunteer.jpg.transform/1288/q82/feature/image.jpeg"
              className="img-fluid"
              alt="Responsive image"
            />
            <h1 className="sm:text-xl text-xl mt-2  font-black title-font text-left mb-4 text-gray-900">
              Be a Volunter
            </h1>
          </div>
          <div className="col-md-4 p-4">
            {" "}
            <img
              src="https://www.redcrossblood.org/content/dam/redcrossblood/home-page-images/financial-donation.jpg.transform/1288/q82/feature/image.jpeg"
              className="img-fluid"
              alt="Responsive image"
            />
            <h1 className="sm:text-xl text-xl mt-2  font-black title-font text-left mb-4 text-gray-900">
              Make a Financial Donation
            </h1>
          </div>
        </div>
        <h1 className="sm:text-5xl text-4xl mt-3 font-semibold title-font mb-4 text-gray-900">
          Explore being a <span className="text-red-700">Donor </span>{" "}
        </h1>
        <div className="row m-3">
          <div className="col-md-4 p-4">
            <h1 className="sm:text-2xl text-xl mt-2 font-bold title-font text-left mb-4 text-gray-900">
              Who can Give <span className="text-red-700">Blood </span> ?
              <p className="text-base mt-1 text-gray-700">
                {" "}
                To donate <span className="text-red-700">Blood </span> you will
                need to:
                <ul type="disc">
                  <li>-be generally fit and well</li>
                  <li>-be aged between 17 and 65</li>
                  <li>
                    -weigh between 7 stone 12 lbs (50kg) and 25 stone (158kg)
                  </li>
                  <li>
                    -have suitable veins (we will check these before you donate)
                  </li>
                  <li>
                    -meet all donor eligibility criteria (we will check this
                    with you before you donate)
                  </li>
                </ul>
              </p>
            </h1>
          </div>
          <div className="col-md-4 p-4">
            <h1 className="sm:text-2xl text-xl mt-2 font-bold title-font text-left mb-4 text-gray-900">
              Who can't Donate <span className="text-red-700">Blood </span> ?
              <p className="text-base mt-1 text-gray-700">
                {" "}
                You can't donate <span className="text-red-700">Blood </span> if
                you:
                <ul type="disc">
                  <li>-have had most types of cancer</li>
                  <li>-have some heart conditions</li>
                  <li>
                    -have received <span className="text-red-700">Blood </span>{" "}
                    , platelets, plasma or any other{" "}
                    <span className="text-red-700">Blood </span> products after
                    1 January 1980
                  </li>
                  <li>-have tested positive for HIV</li>
                  <li>-have had an organ transplant</li>
                </ul>
              </p>
            </h1>
          </div>
          <div className="col-md-4 p-4">
            <h1 className="sm:text-2xl text-xl mt-2 font-bold title-font text-left mb-4 text-gray-900">
              How often can I give <span className="text-red-700">Blood </span>{" "}
              ?
              <p className="text-base mt-1 text-gray-700">
                Men can give blood every 12 weeks and women can give{" "}
                <span className="text-red-700">Blood </span> every 16 weeks.
                This is because men generally have higher iron levels than
                women.
              </p>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
