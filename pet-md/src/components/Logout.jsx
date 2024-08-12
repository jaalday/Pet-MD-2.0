import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { supabase } from "../config/supabaClients";





// export async function loader() {
//   const url = `${import.meta.env.VITE_SOURCE_URL}/logout`;
//   //trying to add commits

//   const access_token = localStorage.getItem("access_token");

//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   const statusCode = response.status;
//   return statusCode === 200 ? true : false;
// }

const Logout = () => {
    // const navigate = useNavigate();
    // const response = useLoaderData();
    // const { setIsAuth } = useAuth();
    // const { user, logout } = useAuth();
   

  
//   useEffect(() => {
//     const logout = async () => {
//       const { error } = await supabase.auth.signOut();
//       if (response) {
//         console.log("Logged out");
//         navigate("/");
//       } else {
//         console.log("Error logging out:", error);
//         return;
//       }
      
//     };
//     logout();
//   }, [navigate])

    
//   };
const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        console.log("Logged out");
        navigate("/");
      } else {
        console.log("Error logging out:", error);
      }
    };
    logout();
  }, [navigate]);

  return null;  // Assuming this component doesn't render anything
};
  
  export default Logout;