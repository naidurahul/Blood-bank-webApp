import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import {
  FiletypeJsx,
  PersonUp,
  ShieldShaded,
  Wechat,
} from "react-bootstrap-icons";
import BloodDonationProgram from "../assets/BloodDonationProgram.jpg";
import { ourTeam } from "../global/constants";

const Home = () => {
  return (
    <>
      <div className="mt-2 ">
        <Row>
          <Col xs={12} md={8} lg={8} className="my-2">
            <div className="p-2   rounded">
              <h6 className="huge text-primary">
                <span className="xxxxlarge text-white">Who is</span> ERAKTA
                NEPAL?
              </h6>
              <p className="text-grey">
                eRakta Nepal is a non-profit organization that is dedicated to
                providing a safe and reliable blood supply to those in need.
                Their mission is to promote and facilitate voluntary blood
                donation in Nepal, while also ensuring the safety and quality of
                the blood supply. eRakta Nepal works with various partners and
                initiatives to raise awareness about the importance of blood
                donation and to encourage more people to donate blood.
              </p>{" "}
              <p className="text-grey">
                eRakta Nepal's platform is designed to be user-friendly and
                accessible, making it easy for donors and recipients to find
                information, schedule appointments, and track their donation
                history. Their staff are highly trained and dedicated
                professionals who are committed to providing the best possible
                service to donors and recipients. Additionally, eRakta Nepal
                uses modern technology to manage its blood supply and donation
                process, which helps to ensure that the blood supply is always
                up-to-date and accurate.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} md={4} lg={4} className="my-2">
            <div className="p-2 d-flex flex-column align-items-center justify-content-center h-100 ">
              <Button variant="outline-primary text-white border-white  w-50 ">
                Donate Blood
              </Button>{" "}
              <Button variant="outline-primary text-white border-white mt-2  w-50 ">
                Request Blood
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </div>

      <div className="p-2 mt-4   rounded ">
        <h6 className="huge text-primary">
          <span className="xxxxlarge text-white">What </span> We Do?
        </h6>
        <p className="text-grey">
          Blood banks play a vital role in ensuring the availability of safe and
          sufficient blood supply for medical treatments and emergency
          situations. A blood bank management system is an essential tool that
          facilitates the efficient management of the entire blood donation and
          distribution process. The "What We Do" section of a blood bank
          management system provides an overview of the activities and services
          provided by the blood bank, including the collection, testing,
          storage, and distribution of blood. In this section, donors and other
          stakeholders can learn about the blood bank's impact on the community,
          the number of blood donations collected, and the various services
          provided to ensure the safety and quality of donated blood.
        </p>
        <Row className="mx-2 d-flex justify-content-center ">
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info py-2">
              <h6 className="xxxlarge">21</h6>
              <h6 className="xlarge mb-0">Event Organized</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">322</h6>
              <h6 className="xlarge mb-0">Blood Collected</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">17</h6>
              <h6 className="xlarge mb-0">Life Saved</h6>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={2} className="my-2">
            <Card className="px-2 text-dark text-center bg-info  py-2">
              <h6 className="xxxlarge">872</h6>
              <h6 className="xlarge mb-0">Blood Searched</h6>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="mt-3">
        <div className="p-2   rounded">
          <h6 className="huge text-primary">
            <span className="xxxxlarge text-white">Why</span> ERAKTA NEPAL?
          </h6>
          <p className="text-grey">
            eRakta Nepal is a reliable and socially responsible organization
            that is committed to providing safe and reliable blood supply to
            those who need it. Their user-friendly platform, dedicated staff,
            and modern technology make them an excellent choice for blood
            donation and transfusion needs.
          </p>
          <div className="rounded border p-2">
            <div>
              <h6 className="d-flex mb-0">
                <ShieldShaded className=" mr-1" size={20} />{" "}
                <span className="xxlarge mb-1">
                  Safe and Reliable Blood Supply
                </span>
              </h6>
              <p className="ml-3 text-grey">
                eRakta Nepal is committed to providing a safe and reliable blood
                supply to those who need it. They follow strict guidelines and
                procedures to ensure that all blood donations are screened and
                tested for infectious diseases and other risk factors.
                Additionally, they maintain accurate records of all blood
                donations and transfusions, which helps to ensure the safety and
                quality of the blood supply.
              </p>
            </div>{" "}
            <div>
              <h6 className="d-flex mb-0">
                <PersonUp className=" mr-1" size={20} />{" "}
                <span className="xxlarge mb-1">Easy to Use Platform </span>
              </h6>
              <p className="ml-3 text-grey">
                eRakta Nepal's platform is designed to be user-friendly and easy
                to navigate. This makes it easy for donors to find nearby
                donation centers, schedule appointments, and track their
                donation history. Additionally, recipients can easily request
                blood and track the status of their request through the eRakta
                Nepal platform.
              </p>
            </div>{" "}
            <div>
              <h6 className="d-flex mb-0">
                <FiletypeJsx className=" mr-1" size={20} />{" "}
                <span className="xxlarge mb-1">Modern Technology </span>
              </h6>
              <p className="ml-3 text-grey">
                eRakta Nepal uses modern technology to manage its blood supply
                and donation process. Their platform is web-based and
                mobile-friendly, which makes it easy for donors and recipients
                to access information and manage their accounts from anywhere.
                Additionally, eRakta Nepal uses advanced software to track and
                manage blood donations, which helps to ensure that the blood
                supply is always up-to-date and accurate.
              </p>
            </div>
            <div>
              <h6 className="d-flex mb-0">
                <Wechat className=" mr-1" size={20} />{" "}
                <span className="xxlarge mb-1">Social Responsibility </span>
              </h6>
              <p className="ml-3 text-grey">
                eRakta Nepal is a socially responsible organization that is
                committed to serving the needs of the community. They partner
                with various organizations and initiatives to promote blood
                donation awareness and education, as well as to provide support
                and assistance to those in need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4  rounded text-center py-2">
        <h6 className="xxxxlarge">Meet Our Team</h6>
        <div className="d-flex  justify-content-around mt-5">
          {ourTeam.map((member) => {
            return (
              <div key={member.name} className="text-center">
                <Image width={120} roundedCircle src={member.photoLink} />
                <h6 className="xxlarge mt-1">{member.name}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
