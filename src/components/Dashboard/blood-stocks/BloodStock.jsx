import { Chart, registerables } from "chart.js";
import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import AB from "../../../assets/AB.png";
import AN from "../../../assets/AN.png";
import AP from "../../../assets/AP.png";
import BN from "../../../assets/BN.png";
import BP from "../../../assets/BP.png";
import ON from "../../../assets/ON.png";
import OP from "../../../assets/OP.png";
Chart.register(...registerables);

const bloodGroup = [
  { bg: "A+", image: AP },
  { bg: "A-", image: AN },
  { bg: "B+", image: BP },
  { bg: "B-", image: BN },
  { bg: "O+", image: OP },
  { bg: "O-", image: ON },
  { bg: "AB+", image: AB },
];
const BloodStock = () => {
  return (
    <>
      <Card className="w-50">
        <Row className="">
          <Col xs={4} md={4} className="d-flex my-2">
            <Button variant="light-green  border-dark mx-2  ">
              Update Blood Stock
            </Button>{" "}
          </Col>
          {bloodGroup?.map((b, index) => {
            return (
              <>
                <Col xs={4} md={4} className="d-flex my-2">
                  <Image src={b.image} width={50} />
                  <div>
                    <h6 className="xxxlarge mb-0">43</h6>
                    <h6 className="large ml-1 text-muted mb-0">Pint</h6>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Card>
    </>
  );
};

export default BloodStock;
