
// import { supabase } from "../config/supabaClients";
// import { Form, useNavigate, useActionData } from "react-router-dom";
// import { useEffect } from "react";

// import { useAuth } from "../AuthContext";


// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");
//   console.log("data", data);
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email,
//     password: password,

// });
// console.log("data", data);
// if( data && !error){
//   return true;

  

// } else{
//   return false;
// }

// }




// const Login = () => {

//   const navigate = useNavigate();
//     const response = useActionData();
    
//     const { setIsAuth } = useAuth();

//     useEffect(() => {
//         const checkAuth = () => {
//             if (typeof response !== 'undefined') {
//                 setIsAuth(response);
//                 return response && navigate(`/profile`);
//             }
//         };
//         checkAuth();
//     }, [response, setIsAuth, navigate]);
//     if(response){
//       navigate('/profile');
//     }




//   return (
//     <>
//       <div className="sign_in_banner">
//         <div className="sign-in-card">
//           <h1>Login</h1>
//           <Form id="login" method="POST">
//             <label>
//               Email:
//               <input type="email" name="email" placeholder="enter your email" />
//             </label>
//             <br />
//             <br />
//             <label>
//               Password:
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="enter your password"
//               />
//             </label>
//             <br />
//             <br />
//             <button className="login-button" type="submit">
//               Login
//             </button>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;



import { useState } from 'react';
import { supabase } from '../config/supabaClients';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);
    } else {
      console.log('Logged in successfully:', data);
      navigate('/profile'); // Redirect to the profile page after successful login
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

}

export default Login;