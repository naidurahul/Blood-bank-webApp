import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://st2.depositphotos.com/2875507/7393/v/950/depositphotos_73938567-stock-illustration-hand-donate-blood-drop-put.jpg"
              className="img-fluid"
              alt="Responsive "
            />
          </div>
          <div className="col-md-6">
            <h1 className="sm:text-3xl  text-2xl text-center font-medium title-font mb-4 text-gray-900">
              Your can Directly{" "}
              <span className="text-red-600"> Contact Us by:</span>
            </h1>
            <ul className="text-xl" type="circle">
              <li>-Phone Number:9800762253</li>
              <li>-LandLine Number: 01-832346 </li>
              <li>-Tol Free Number:839476384995726</li>
              <li>-Email:givemeblood@gmail.com</li>
              <li>-Fax Number:43654332</li>
            </ul>
            <h1 className="sm:text-xl  text-xl text-center font-medium mt-4 title-font mb-4 text-gray-900">
              Your can Directly{" "}
              <span className="text-red-600"> Visit Our Office:</span>
            </h1>
            <ul className="text-xl " type="circle">
              <li>-Address:Putalisadak,Kathmandu</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
