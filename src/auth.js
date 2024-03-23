// auth.js
import {useState} from 'react';
export function useAuth() {
    const [isAuthenticated, setAuthenticated] = useState(false);
  
    function login() {
      //login logic
      setAuthenticated(true);
    }
  
    function logout() {
      //logout logic
      setAuthenticated(false);
    }
  
    return { isAuthenticated, login, logout };
  }