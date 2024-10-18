import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useFormRights } from "./FormRightsContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import api from "./api";
import "../components/loginnew.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setFormRights } = useFormRights();

  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const loginResponse = await api.post("/Account/login", {
        UserName: username,
        Password: password,
      });

      if (loginResponse.data.status === "success") {
        const token = loginResponse.data.data;
        localStorage.setItem("authToken", token);
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.nameid;

        const userResponse = await api.post(
          "/users/GetUser",
          { Id: userId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (userResponse.data.status === "success") {
          const userData = userResponse.data.data;
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("role", userData.role);

          // Fetch form rights
          const formRightsResponse = await api.get(
            `/FormPagesRights/GetFormRightsList?id=${userId}`,
            {
              headers: { Authorization: `Bearer ${token} ` },
            }
          );

          if (formRightsResponse.data.status === "success") {
            setFormRights(formRightsResponse.data.data);
          } else {
            console.error("Failed to fetch form rights");
          }

          setSuccessMessage("Login successful!");

          const origin =
            location.state?.from?.pathname || "/dashboard";
          navigate(origin);
        } else {
          setError("Failed to fetch user data.");
        }
      } else {
        setError(
          loginResponse.data.message 
        );
      }
    } catch (err) {
      console.error(
        "API Error:",
        err.response ? err.response.data : err.message
      );
      setError("Invalid credentials or failed to login.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-div">
      <div className="login-sub-div">
        <div className="login-left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/newlogo.png`}
            alt="logo"
          />
          <h2 className="login-heading">LOGIN</h2>

          <div className="login-form-div">
            <form onSubmit={handleLogin}>
              <div className="">
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-input"
                  value={username} // Bind to state
                  onChange={(e) => setUsername(e.target.value)} // Update state
                  required
                />
              </div>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="form-input"
                  value={password} // Bind to state
                  onChange={(e) => setPassword(e.target.value)} // Update state
                  required
                />
                <span
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  ></i>
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4 remember-container">
                <div className="d-flex align-items-center">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <Link to="/forgot-password" className="Forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="login-btn">
                LOG IN
              </button>
            </form>
            {loading && <div className="loading-message">Loading...</div>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
          </div>
        </div>
        <div className="logi-right">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Images/travelbag.png`}
            alt="travelbag"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
