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


const Routes = () => {

const { isAuth } = useAuth();

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
                        element: <Profile/>
                            },
                            {
                                path: "/logout",
                                element: <Logout/>
                            },
                   
                   

                ],
            },

        ];
    
        const router = createBrowserRouter([
            ...publicRoutes,
            ...(!isAuth ? protectedRoutes : []),
            ...protectedRoutes,
          ]);
          return <RouterProvider router={router} />;
        
        };
    

export default Routes;