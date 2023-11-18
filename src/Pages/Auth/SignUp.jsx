import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Register with the souled store</h2>
        <div className="signin-btns">
          <button onClick={() => navigate("/sign-in")} className="login-btn">
            LOGIN
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="active-login-btn"
            disabled
          >
            REGISTER
          </button>
        </div>
        <div className="signin-input">
          <input type="text" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          <button type="submit" className="register-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
