import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

  const [apiData, setApiData] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  /* =========================
     GET DATA FROM API
  ========================= */

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/login")
      .then((res) => {

        setApiData(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  /* =========================
     LOGIN FUNCTION
  ========================= */

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        }
      );

      setMessage(res.data.message);

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Server Error"
      );

    }

  };

  return (

    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="left-side">

        <div className="overlay">

          <h1>Urban Shop</h1>

          <p>
            Fashion That Defines Your Style
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="right-side">

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <h2>Login</h2>

          {/* API DATA */}

          <div className="api-box">

            <h3>API Demo Data</h3>

            <p>
              <strong>Email:</strong>
              {" "}
              {apiData.email}
            </p>

            <p>
              <strong>Password:</strong>
              {" "}
              {apiData.password}
            </p>

          </div>

          {/* EMAIL */}

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          {/* PASSWORD */}

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          {/* BUTTON */}

          <button type="submit">
            Login Now
          </button>

          {/* MESSAGE */}

          <p className="message">
            {message}
          </p>

        </form>

      </div>

    </div>

  );
}

export default Login;