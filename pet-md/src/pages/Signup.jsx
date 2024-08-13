
// import { Form } from "react-router-dom";
import {supabase}  from "../config/supabaClients";

import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  console.log("formData", formData);


  function handleChange(event) {
    console.log("event", event);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("formData", formData);
    const { user, session, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
   
    });
    console.log("user", user);
    console.log("session", session);
    console.log("error", error);
    alert("Succesfully signed up!");
  }




  return (
    <>
      <div className="sign_in_banner">
       
        <div className="login-container">
          <h1 className="login-text">Sign-Up</h1>
          <form id="signUp" onSubmit={handleSubmit}>
            
              <input
              className="input"
                type="email"
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
              />
           
          
            
              <input
              className="input"
                type="password"
                name="password"
                placeholder="enter your password"
                onChange={handleChange}
              />
              <p> already have an account?</p> <Link to ="/login"><p>log in</p></Link>
          

          
       
            <button className="login-button" type="submit">
              Sign-up
            </button>
          
       
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

// import { useState } from 'react'
// import { supabase } from '../config/supabaClients'

// export default function SignUp() {
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState('')

//   const handleLogin = async (event) => {
//     event.preventDefault()

//     setLoading(true)
//     const { error } = await supabase.auth.signInWithOtp({ email })

//     if (error) {
//       alert(error.error_description || error.message)
//     } else {
//       alert('Check your email for the login link!')
//     }
//     setLoading(false)
//   }

//   return (
//     <div className="row flex flex-center">
//       <div className="col-6 form-widget">
//         <h1 className="header">Supabase + React</h1>
//         <p className="description">Sign in via magic link with your email below</p>
//         <form className="form-widget" onSubmit={handleLogin}>
//           <div>
//             <input
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={email}
//               required={true}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <button className={'button block'} disabled={loading}>
//               {loading ? <span>Loading</span> : <span>Send magic link</span>}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }