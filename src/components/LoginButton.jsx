// loginbutton.js
//import { useAuth } from './auth';

export function LoginButton() {
  //const auth = useAuth();

  async function handleLogin() {
    try {

      //await auth.login('mor_2314', '83r5^_');
      
      // Redirect to store home page on success
      window.location.href = '/products';
    } catch (err) {
      // Show error message
      console.error(err);
    }
  }
  return<button onClick={handleLogin}>Login</button>;
}
