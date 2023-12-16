import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'book/:id',
        element: <PrivateRoute><BookService /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-r5gz36i5l-imran-hossains-projects.vercel.app/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings /></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://car-doctor-server-r5gz36i5l-imran-hossains-projects.vercel.app/services/${params.id}`)
      },
    ]
  },
]);


export default router;




69 - 2







