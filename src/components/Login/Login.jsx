import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/admin/login",
        { username, password }
      );
      console.log(data);
      setError("");
      if (data) {
        localStorage.setItem("blood", JSON.stringify({ role: "admin" }));
        navigate("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.msg);
      setError(error.response.data.msg);
      setLoading(false);
    }
  };
  const userInfo = JSON.parse(localStorage.getItem("blood"));

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl my-3">
        Login In To Visit <span className="text-red-700">BLOOD</span>{" "}
      </h1>
      {error && (
        <h1 className="text-center text-lg my-2 text-red-600">{error}</h1>
      )}
      {loading && (
        <div
          className="spinner-border mx-auto my-2"
          role="status"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <section className>
        <div className=" items-center px-5 py-2 lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-1">
              <div className="mt-1">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="text"
                        required
                        placeholder="Username"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      style={{ backgroundColor: "#C53030" }}
                      onClick={handleClick}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
