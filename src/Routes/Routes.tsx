import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Main from "@/Layout/Main";
import Login from "@/Pages/Login/Login";
import Signup from "@/Pages/Signup/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default routes;
