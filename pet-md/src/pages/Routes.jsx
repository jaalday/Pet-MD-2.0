import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Error from '../components/Error';
import SignUp from './Signup';
import Login from './Login';
import Profile from './Profile';


const router = createBrowserRouter([
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
                element: <Login/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }




        ],
    },
]);

function Routes() {
    return (
        <RouterProvider router={router}/>
          
    );
}

export default Routes;