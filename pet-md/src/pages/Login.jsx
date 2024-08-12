
// /* eslint-disable react-refresh/only-export-components */
// import { Form, useNavigate, useActionData } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { supabase } from '../config/supabaClients';



// import {  useEffect } from 'react';



// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email,
//     password: password,

// });
// if( data && !error){
//   return {success: true, user: data.user};

// } else{
//   return false;
// }
// }

// const Login = () => {
//   const navigate = useNavigate();
//     const response = useActionData();
    
//     const { setIsAuth} = useAuth();

//     useEffect(() => {
//         const checkAuth = () => {
//             if (response && response.success) {
//               console.log(response);
//                 setIsAuth(response.success);
//                 return navigate(`/profile`);
//             }
//         };
//         checkAuth();
//     }, [response, setIsAuth, navigate]);
//     if(response){
//       navigate('/profile');
//     }

//   return (
//     <>
//     <div className='login_img_box'>
    
//     <div className="login-card">
//       <h1>Log In</h1>
//       <Form id="login" method="POST">
//         <label>
//           <input type="text" name="email" placeholder="Enter Email" />
//           <br />
//           <br />
//           <input type="password" name="password" placeholder="Enter Password" />
//           <br />
//           <br />
//           <button type="submit" className="login-button">
//             Log In
//           </button>
//         </label>
//       </Form>
//     </div>
//     </div>
//     <div className="login_box2">
//     </div>
//     </>
//   );
// };


// export default Login;






import { useContext, useState } from 'react';
import { supabase } from '../config/supabaClients';
import { useNavigate} from 'react-router-dom';

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
   

    if (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);
    } else {
      
    sessionStorage.setItem('user', JSON.stringify(data.user));
    console.log("handlelogin", data.user);
    
    
      navigate('/profile'); 
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