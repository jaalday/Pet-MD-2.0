

import { useContext, useState } from 'react';
import { supabase } from '../config/supabaClients';
import { useNavigate, Link} from 'react-router-dom';

const Login  = () => {

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
    console.log("data", data);
 

   

    // if (error) {
    //   console.error('Error logging in:', error.message);
    //   setError(error.message);
    // } else {
      if (data) {
        const { user, session } = data;
        localStorage.clear();
        localStorage.setItem("user", user);
        localStorage.setItem("access_token", session.access_token);
        localStorage.setItem("refresh_token", session.refresh_token);
        localStorage.setItem("expiration", session.expires_at);
        console.log("data", data);
      }
      
    // sessionStorage.setItem('user', JSON.stringify(data.user));
    console.log("handlelogin", data.user);
    
    
      navigate('/profile'); 
    // }
  };
  return (
    <div className='login-container'>
      <h2 className='login-text'>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          
          <input
          className='input'
          placeholder='example@gmail.com'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          
          <input
          placeholder='password'
          className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p> Need to create an account?</p> <Link to ="/login"><p>sign up</p></Link>
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

}

export default Login;



// import { useEffect, useState } from 'react';
// import { supabase } from '../config/supabaClients';
// import { Form, json, useActionData,} from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { useNavigate } from 'react-router-dom';

// export async function action({request}) {
//   const formData = await request.formData();
//   const email = formData.get('email');
//   const password = formData.get('password');


//   try{
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });
//     if (error) {
//      throw error;
//     }

// if(data.user.id){
//   const {user, session} =data;
//   localStorage.clear();
//   localStorage.setItem('user_id', user.id);
//   localStorage.setItem("access_token", session.access_token);
//   localStorage.setItem("refresh_token", session.refresh_token);
//   localStorage.setItem("expires_at", session.expires_at);
//   return data;
// } else{
//   throw new Error("User not created");
// }
// }catch (errors) {
//   return {errors};
// }
// }

// const Login = () => {
//   const actionData = useActionData();
//   const navigate = useNavigate();
//   const {isAuth, setUser} = useAuth();

//   useEffect(() => {
//     const checkAuth =  () => {
//       if (isAuth) {
//         setUser(true);
        
//         if (actionData?.data) {
//           navigate('/profile');
//         }
//         else if (actionData?.errors) {
//           return navigate('/login');
//       }

//       }
//       else {
//         navigate('/login');
//     }
//   };
//     checkAuth();
//   }, [ actionData, isAuth, setUser, navigate]);


//   return (
//     <>
//     {actionData?.errors && actionData.errors.status === 400 && (
//       <div>Invalid</div>)}
//     <Form method="POST" >
//       <div>
//         <label>
//           Email
//           <input type="email" name="email" required />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password
//           <input type="password" name="password" required />
//         </label>
//       </div>
//       <button type="submit">Sign in</button>
//       </Form>
//     </>
//     )
  
//   };

//   export default Login;






           
          
            













// import { useState, Form} from 'react';
// import { supabase } from '../config/supabaClients';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null);

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.error('Error logging in:', error.message);
//       setError(error.message);
//     } else {
//       localStorage.setItem('access-token', data.access_token);
//       sessionStorage.setItem('user', JSON.stringify(data.user));
//       user(data.user);
//       navigate('/profile');
//     }
//   };

//   return (
//     <div className='login-container'>
//       <h2 className='login-text'>Login</h2>
//       <Form onSubmit={handleLogin} method:POST>
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button className='login-button' type="submit">Login</button>
//       </Form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );

// }


// export default Login;







// import { useEffect } from "react";
// import { supabase } from "../config/supabaClients";

// const Login =  async () => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: 'email',
//     password: 'password',
//   });
//   if (error) {
//     console.error('Error logging in:', error.message);
//   } else {
//     console.log(data);
    
//   }

//   useEffect(() => {
//     const session = supabase.auth.session();
//     console.log(session);
// }, []);
   
// }

// export
// default Login;
