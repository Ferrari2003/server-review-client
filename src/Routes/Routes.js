import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Card from "../Pages/Home/Home/Cards/Card/Card";

import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Shared/About/About";
import Blog from "../Pages/Shared/Blog/Blog";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

export const router = createBrowserRouter([
 {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            
            element:<Home></Home>

        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/card',
            element: <Card></Card>
        }
       
    ]
 }
])

export default router;