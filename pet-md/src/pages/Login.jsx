
import { supabase } from "../config/supabaClients";
import { Form, useNavigate, useActionData } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../AuthContext";


export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,

});
if( data && !error){
  return true;

} else{
  return false;
}
}


const Login = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const { user, session, error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   console.log("user", user);
  //   console.log("session", session);
  //   console.log("error", error);
  //   alert("Succesfully logged in!");
  // };
  const navigate = useNavigate();
    const response = useActionData();
    
    const { setIsAuth } = useAuth();

    useEffect(() => {
        const checkAuth = () => {
            if (typeof response !== 'undefined') {
                setIsAuth(response);
                return response && navigate(`/profile`);
            }
        };
        checkAuth();
    }, [response, setIsAuth, navigate]);
    if(response){
      navigate('/profile');
    }




  return (
    <>
      <div className="sign_in_banner">
        <div className="sign-in-card">
          <h1>Login</h1>
          <Form id="login" method="POST">
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
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;