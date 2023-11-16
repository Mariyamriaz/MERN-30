import Calculator from "../component/calculator";
import Security from "../component/security";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";


const router = createBrowserRouter([
  {
    path: "/calculator",
    element: <Calculator></Calculator>,
  },
  {
    path: "/security",
    element: <Security></Security>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/home/:tasks",
    element: <Tasks></Tasks>,
  },
]);

export default router