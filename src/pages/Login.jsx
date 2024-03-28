// Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLoginMutation} from '../redux/api';

function Login() {

  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await login({ username, password }).unwrap();
      navigate('/products');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.data}</p>}

      <input 
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input 
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)} 
      />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
