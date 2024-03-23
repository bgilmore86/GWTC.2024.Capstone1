import { useAuth } from "../auth";

export function LoginButton() {
  const { isAuthenticated, login, logout } = useAuth();

  if (isAuthenticated) {
    return <button onClick={logout}>Logout</button>;
  } else {
    return <button onClick={handleLogin}>Login</button>;
  }

  async function handleLogin() {
    try {
      //login logic
      await login("mor_2314", "83r5^_");

      // Redirect to lgoin page
      window.location.href = "/login";
    } catch (err) {
      // Show error message
      console.error(err);
    }
  }
}
export default LoginButton;