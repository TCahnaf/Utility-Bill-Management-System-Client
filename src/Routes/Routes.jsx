import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Homepage from "../Pages/Homepage";
import Bills from "../Pages/Bills";

export const router = createBrowserRouter([
  {
     path : "/",
        Component: Root,
        children: [
            {
                index:true,
                Component: Homepage
            },

            {
                path: '/bills',
                Component: Bills
            }
        ]

   
  },
]);