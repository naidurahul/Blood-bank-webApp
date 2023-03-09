import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="bg-light px-5 py-2 rounded-lg ">
          <h6 className="xxxlarge text-center text-dark mb-1"> ERakta Nepal</h6>

          <Form.Group className="">
            <h6 className="mid-font text-dark mb-1">Username</h6>
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
          <Form.Group className="">
            <h6 className="mid-font text-dark mb-1">Password</h6>
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
          <Button size="sm w-100 mt-2" onClick={onLogin}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
