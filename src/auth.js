// auth.js
import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  async function login(username, password) {
    //Simulate API call for authentication
    try {
      //calling an authentication API
      //assume successful login
      await fakeLogin(username, password);
      setAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  }

  function logout() {

    setAuthenticated(false);
  }

  //Simulate login
  async function fakeLogin(username, password) {
    //Simulate an API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //Check credentials
    if (username === 'mor_2314' && password === '83r5^_') {
      return; //login successful
    } else {
      throw new Error('Invalid credentials');
    }
  }

  return { isAuthenticated, login, logout };
}
