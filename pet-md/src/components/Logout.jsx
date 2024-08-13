// import { useEffect } from "react";
// import { json, useLoaderData, useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import { supabase } from "../config/supabaClients";


// export async function loader() {
//     try {
//         const jwt = localStorage.getItem("access-token");
//       const { error } = await supabase.auth.signOut(jwt);
//       if (error) {
//         throw error;
//       }
//       return { success: true };
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//       return json (error);
//     }
// }




// const Logout = () => {
 
   


// const response = useLoaderData();
// const navigate = useNavigate();
// const { setIsAuth } = useAuth();

// let logged_in = true;

// if (response) {
//   localStorage.removeItem("access-token");
//   logged_in = false;
// } else {
//     alert('problem logging out');
// }

// useEffect(() => {
//   const checkAuth = () => {
//     if (!logged_in) {
//       user(logged_in);
//       return navigate(`/`);
//     }
//   };
//   checkAuth();
// }, [logged_in, setIsAuth, navigate, response]);

//   useEffect(() => {
//     const logout = async () => {
//       const { error } = await supabase.auth.signOut();
//       if (!error) {
//         console.log("Logged out");
//         navigate("/");
//       } else {
//         console.log("Error logging out:", error);
//       }
//     };
//     logout();
//   }, [navigate]);

//   return null;  


import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaClients';
import { useAuth } from '../AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      localStorage.removeItem('access-token');
      sessionStorage.removeItem('user');
      
     
      navigate('/');
    }

    


  };

  return (
    <>
    <h1>Are you sure you want to log out?</h1>
    <button onClick={handleLogout}>
      Logout
    </button>
    </>
  );
};

export default Logout;

