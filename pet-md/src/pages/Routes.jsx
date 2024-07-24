import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Error from '../components/Error';
import Signup from './Signup';
import Login from './Login';


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
                element: <Signup/>
            },
            {
                path: "/login",
                element: <Login/>
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