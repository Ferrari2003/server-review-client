import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Shared/About/About";
import Blog from "../Pages/Shared/Blog/Blog";
import Card from "../Pages/Shared/Card/Card";
import Details from "../Pages/Shared/Details/Details";
import Login from "../Pages/Shared/Login/Login";
import NotFund from "../Pages/Shared/NotFound/NotFund";
import Register from "../Pages/Shared/Register/Register";
import ShowReview from "../Pages/Shared/ShowReview/ShowReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/showReview',
            element:<PrivateRoute><ShowReview></ShowReview></PrivateRoute>
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
            path:'*',
            element:<NotFund></NotFund>
        } 
       
    ]
 }
])

export default router;