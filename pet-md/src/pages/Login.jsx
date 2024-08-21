

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
 

   

    
      if (data) {
        const { user, session } = data;
        localStorage.clear();
        localStorage.setItem("user", user.id);
        localStorage.setItem("access_token", session.access_token);
        localStorage.setItem("refresh_token", session.refresh_token);
        localStorage.setItem("expiration", session.expires_at);
        console.log("data", data);
      }
      
    sessionStorage.setItem('user', JSON.stringify(data.user));
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




// }








           
          
            












