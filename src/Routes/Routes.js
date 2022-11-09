import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Shared/About/About";
import Blog from "../Pages/Shared/Blog/Blog";
import Card from "../Pages/Shared/Card/Card";
import Details from "../Pages/Shared/Details/Details";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

export const router = createBrowserRouter([
 {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch(`http://localhost:5000/`)
        },
        {
            path:'/card',
            element:<Card></Card>,
            loader: () => fetch(`http://localhost:5000/services`)
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
       
    ]
 }
])

export default router;