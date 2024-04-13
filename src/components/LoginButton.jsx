import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function LoginButton({ showLoginButton }) {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTcxMTMwODg5OX0.aw2ZYW1WiZAE1SMp6BmGKw7HzpbADO1RPA0sUrrT-gk";
    setToken(accessToken);

    // API call
    fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      console.log("Token was used correctly:", accessToken);
    });

    // Navigate on success
    navigate("/products");
  };

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return showLoginButton ? (
    <button onClick={handleLogin}>Login</button>
  ) : (
    <button onClick={handleLogout}>Logout</button>
  );
}

LoginButton.propTypes = {
  showLoginButton: PropTypes.bool.isRequired,
};
