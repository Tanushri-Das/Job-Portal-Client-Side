import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Main from "@/Layout/Main";
import Login from "@/Pages/Login/Login";
import Signup from "@/Pages/Signup/Signup";
import AllJobs from "@/Pages/AllJobs/AllJobs";
import JobDetails from "@/Pages/JobDetails/JobDetails";

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
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);
export default routes;
