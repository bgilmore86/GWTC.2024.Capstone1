
import {useState} from 'react';

import {useLoginMutation} from "../redux/apiSlice"

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [login] = useLoginMutation();

    const handleLogin = (e)  => {
        login(username, password);
        e.preventDefault();
        console.log("Login  button clicked", `{username}`);
    };

  


  return(
      <div>
        <h1>Login Component</h1>

    <form>

      <label>
        <p>Username</p>
      <input 
        type="text" 
        placeholder="USERNAME"
        value={username}
        onChange={(e)=> setUsername(e.target.value)} />
      </label>

      <label>
        <p>Password</p>
      <input
        type="password"
        placeholder="PASSWORD"
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
      </label>
      
      <div>
        <button onClick={handleLogin}>Enter Store</button>
      </div>
    </form>
    </div>

  );
}
export default Login;
