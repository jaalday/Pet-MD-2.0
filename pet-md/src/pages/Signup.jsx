
// import { Form } from "react-router-dom";
import supabase from "../config/supabaClients";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    console.log("event", event);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="sign_in_banner">
       
        <div className="sign-in-card">
          <h1>Sign-Up</h1>
          <form id="signUp" onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                onChange={handleChange}
              />
            </label>

            <br />
            <br />
            <Link to="/login">
            <button className="login-button" type="submit">
              Sign-up
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
