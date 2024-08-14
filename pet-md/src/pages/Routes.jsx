import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Error from '../components/Error';
import SignUp from './Signup';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoutesLayout from '../components/ProtectedRoutes';
import { useAuth } from '../AuthContext';
import Logout from '../components/Logout';
import PetProfile from './PetProfile';



const Routes = () => {

const {  user} = useAuth();

const publicRoutes = [
    {
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>,
                // action: loginAction,
                
             
            
            },
        
            {
                path: "/profile",
                element: <Profile/>,
            },
            {
                path: "/petprofile",
                element: <PetProfile/>,
            }
         
      
  
         
           
        ],
    },
];
    const protectedRoutes = [
            {
                element: <ProtectedRoutesLayout/>,
                errorElement: <Error/>,
                children: [
                    {
                        path: "/profile",
                        element: <Profile/>,
                    },
                    {
                        path: "/petprofile",
                        element: <PetProfile/>,
                    },
                    {
                        path: "/logout",
                        element: <Logout/>,
                        // loader:logoutLoader,
                    },
              
                          
                   
                   

                ],
            },

        ];
    
        const router = createBrowserRouter([
            ...publicRoutes,
            ...(!user ? protectedRoutes : []),
            ...protectedRoutes,
          ]);

          return <RouterProvider router={router} />;
        
        };
    

export default Routes;