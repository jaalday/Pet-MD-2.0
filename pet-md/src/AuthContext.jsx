

import { createContext, useContext, useState, useEffect } from 'react';
import supabase from './config/supabaseClients';




const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const[user, setUser] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const{data: session ,error} = await supabase.auth.getSession();
            if (error){
                console.log("error:", error)
                
            }
            else{
                setUser(session.user);
            }
            };
            fetchSession();

            const {data : authListener} = supabase.auth.onAuthStateChange(
                (event, session) => {
                    setUser(session?.user ?? null);
                } 
                );
            }, []);
            

        const value = { 
            user,
            isAuth: !!user,
            login: async(email, password) => { const {error} = await supabase.auth.signIn({ email, password });
            if (error) 
                console.log("error:", error);
            },
            logout: async() => { const {error} = await supabase.auth.signOut();
            if (error) 
                console.log("error:", error);
            }, 
        
        };    
            

        return (
            <AuthContext.Provider value={{ user }}>
                {children}
            </AuthContext.Provider>
        );
    
        
    }
 










// export function AuthProvider({ children }) {
//     const [isAuth, setIsAuth] = useState(false);

//     useEffect(() => {
//         if (localStorage.getItem('access_token')) {
//             setIsAuth(true);
//         }
//     }, []);





//     return (
//         <AuthContext.Provider value={{ isAuth, setIsAuth }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContext);
// }

// AuthProvider.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node,
//     ]).isRequired,
// };

