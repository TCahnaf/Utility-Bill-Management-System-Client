import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Homepage from "../Pages/Homepage";
import Bills from "../Pages/Bills";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Mybills from "../Pages/Mybills";
import PrivateRoute from "./Privateroute";
import BillDetails from "../Pages/BillDetails";

export const router = createBrowserRouter([
  {
     path : "/",
        Component: Root,
        children: [
            {
                index:true,
                loader: async() => {
                  const res = await fetch('http://localhost:3000/bills?limit=6')
                  return res.json();
                },
                Component: Homepage
            },


            {
                path: '/register',
                Component: Register
            },

            {
                path: '/login',
                Component: Login
            },

              {
                path: '/bills',
                 loader: async() => {
                  const res = await fetch('http://localhost:3000/bills')
                  return res.json();
                },
                Component: Bills
            },

              {
                path: '/mybills',
                element: <PrivateRoute>
                    <Mybills></Mybills>
                </PrivateRoute>
            },

            {
                 path: '/bill/details',
                element: <PrivateRoute>
                    <BillDetails></BillDetails>
                </PrivateRoute>

            }


        ]

   
  },
]);