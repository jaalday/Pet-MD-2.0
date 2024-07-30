
import { supabase } from "../config/supabaClients";





const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("user", user);
    console.log("session", session);
    console.log("error", error);
    alert("Succesfully logged in!");
  };

  return (
    <>
      <div className="sign_in_banner">
        <div className="sign-in-card">
          <h1>Login</h1>
          <form id="login" onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" placeholder="enter your email" />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </label>
            <br />
            <br />
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;