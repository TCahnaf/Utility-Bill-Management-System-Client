import {
  createBrowserRouter,
  useParams,
} from "react-router";
import Root from "../Layouts/Root";
import Homepage from "../Pages/Homepage";
import Bills from "../Pages/Bills";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Mybills from "../Pages/Mybills";
import PrivateRoute from "./Privateroute";
import BillDetails from "../Pages/BillDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
     path : "/",
        Component: Root,
        children: [
            {
                index:true,
                loader: async() => {
                  const res = await fetch('https://ph-assignment10-server-livid.vercel.app/bills?limit=6')
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
                  const res = await fetch('https://ph-assignment10-server-livid.vercel.app/bills')
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
                 path: '/bill/details/:id',
                  loader: async({params}) => {
                  const res = await fetch(`https://ph-assignment10-server-livid.vercel.app/bills/${params.id}`)
                  return res.json();
                },

                element: <PrivateRoute>
                    <BillDetails></BillDetails>
                </PrivateRoute>

            },

            {
              path: "*",
              Component:ErrorPage
            }


        ]

   
  },
]);