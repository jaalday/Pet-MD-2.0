import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaClients";






const PetProfile = () => {


   

    const { user} = useAuth();
    const [setUser] = useState(null);
    useEffect(() => {
        // Define an async function to fetch the current session
        const fetchSession = async () => {
          const { data: session, error } = await supabase.auth.getSession();
          if (error) {
            console.error("Error getting current session:", error.message);
          } else {
            setUser(session?.user ?? null);
          }
        };
    
        // Call the async function
        fetchSession();
    }, []);



    console.log(user);  
    return (
        <>

       <h2> pet profile</h2> 
        </>
    
 
    );
    }
    export default PetProfile;