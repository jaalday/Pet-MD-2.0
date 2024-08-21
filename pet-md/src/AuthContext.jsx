
// import { useContext, useState, useEffect, createContext } from 'react';
// import { supabase } from './config/supabaClients';




// // create a context for authentication
// const AuthContext = createContext(
//     {
//         user: null,
//         session: null,
//         signOut: () => null,


//     }
// )

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState()
//     const [session, setSession] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const setData = async () => {
//             const { data: { session }, error } = await supabase.auth.getSession();
//             if (error) throw error;
//             setSession(session)
//             setUser(session?.user)
//             setLoading(false);
//         };

//         const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//             setUser(session?.user)
//             setLoading(false)
//         });

//         setData();

//         return () => {
//             listener?.subscription.unsubscribe();
//         };
//     }, []);

//     const value = {
//         session,
//         user,
//         signOut: () => supabase.auth.signOut(),
//     };

//     // use a provider to pass down the value
//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// // export the useAuth hook
// export const useAuth = () => {
//     return useContext(AuthContext);
// };






















import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./config/supabaClients";



const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const fetchSession = async () => {
      const { data: {session}, error} = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting current session:", error.message);
      } else {
        setUser(session?.user ?? null);
      }
    };

 
    fetchSession();


    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => {
      authListener?. subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    isAuth: !!user,
    login: async (email, password) => {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
    },
    logout: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};







// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();




//   useEffect(() => {
//     // Define an async function to fetch the current session
//     const fetchSession = async () => {
//       const { data: session, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error("Error getting current session:", error.message);
//       } else {
//         setUser(session?.user ?? null);
//       }
//     };

//     // Call the async function
//     fetchSession();

//     // Set up the authentication state change listener
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );
//   }, []);

//   const value = {
//     user, isAuth: !!user,
//     login: async (email, password) => {
//       const { error } = await supabase.auth.signInWithPassword({ email, password });
//       if (error) throw error;
//     },
//     logout: async () => {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//     },
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

























