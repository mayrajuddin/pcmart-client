import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PostList from "../../Pages/PostList/PostList";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
import DashboardHome from "../../Pages/Dashboard/DashboardHome/DashboardHome";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import Wishlist from "../../Pages/Dashboard/Wishlist/Wishlist";
import Error from "../../Pages/ErrorPage/Error";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><PostList /></PrivateRoute>,
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_API_URI}/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist />
            }
        ]

    }
])