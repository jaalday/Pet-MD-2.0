import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { supabase } from "../config/supabaClients";






const Logout = () => {
 
   

  


    

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

  return null;  
};
  
  export default Logout;