import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import {
  ArrowRight,
  BoxArrowInRight,
  ChatDotsFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginImg from "../assets/Login.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const onLogin = () => {
    if (!loginInfo.userName || !loginInfo.password) {
      return toast.error("Please Enter Username and Password to login");
    }
    if (loginInfo.userName === "admin" && loginInfo.password === "12345") {
      localStorage.setItem(
        "user",
        JSON.stringify({ userName: "Samrat Ojha", role: "admin" })
      );
      navigate(`/admin/dashboard`, { replace: true });
    }
  };

  useEffect(() => {
    if (user) {
      navigate(`/admin/dashboard`, { replace: true });
    }
  }, [user]);

  return (
    <>
      <Row className="mt-5 mx-2">
        <Col xs={12} md={7} lg={7}>
          <Image src={LoginImg} width={700} />
        </Col>
        <Col xs={12} md={5} lg={5}>
          <div className="px-0">
            <h6 className="huge mb-0 text-dark">
              Login in to,
              <h6 className="huge mb-0 text-dark d-flex">
                ERakta Nepal
                <BoxArrowInRight className="ml-2 mt-1 text-green" />
              </h6>
            </h6>
            <div className="mt-2">
              {" "}
              <Form.Group className="w-75">
                <h6
                  style={{ fontWeight: 300 }}
                  className="mid-font text-dark mb-1"
                >
                  Username
                </h6>
                <Form.Control
                  type={"text"}
                  placeholder=""
                  className="border-muted"
                  onChange={(e) =>
                    setLoginInfo({
                      ...loginInfo,
                      userName: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="w-75">
                <h6
                  style={{ fontWeight: 300 }}
                  className="mid-font text-dark mb-1"
                >
                  Password
                </h6>
                <Form.Control
                  type={"password"}
                  placeholder=""
                  className="border-muted"
                  onChange={(e) =>
                    setLoginInfo({
                      ...loginInfo,
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Button variant="outline-green  mt-3 d-flex" onClick={onLogin}>
                Login <ArrowRight className="mt-1 ml-2" />
              </Button>{" "}
              <h6
                style={{ fontWeight: 300, textDecoration: "underline" }}
                className="mt-2 hover"
                onClick={() => navigate(`/`, { replace: true })}
              >
                Go to Home
              </h6>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
