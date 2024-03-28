import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export function LoginButton() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  async function handleLogin() {
    //Login logic
    setIsAuthenticated(true);

    //Set token (token from insomnia from API login credentials)
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTcxMTMwODg5OX0.aw2ZYW1WiZAE1SMp6BmGKw7HzpbADO1RPA0sUrrT-gk";
    setToken(accessToken);

    //API call
    fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      console.log("Token was used correctly:", accessToken);
    });

    //Navigate on success
    navigate("/products");
  }

  function handleLogout() {
    setIsAuthenticated(false);
    setToken(null);

    //Navigate when logging out
    navigate("/login");
  }

  return (
    <button onClick={isAuthenticated ? handleLogout : handleLogin}>
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );

}

LoginButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
  token: PropTypes.string,
  setToken: PropTypes.func
};
