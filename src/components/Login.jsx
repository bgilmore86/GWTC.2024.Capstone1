import React from 'react';

function Login() {
  return(
    <section>
    <h2>Login Component</h2>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Enter</button>
      </div>
    </form>
    </section>
  )
}
export default Login;
