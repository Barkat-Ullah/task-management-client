import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

import Home from "../../components/components/Homes/Home";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";
import ErrorPages from "../../Shared/ErrorPage/ErrorPages";
import Dashboard from "../../Page/Dashboard/Dashboard";
import AddPost from "../../Page/Dashboard/Addpost/AddPost";
import MyPost from "../../Page/Dashboard/MyPost/MyPost";
import Update from "../../components/components/Update/Update";
import TaskPost from "../../components/TaskPost/TaskPost";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path:"taskPost",
        element:<TaskPost/>
      }
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "addPost",
        element: <AddPost />,
      },
      {
        path: "post",
        element: <MyPost />,
      },

      {
        path: "update/:id",
        element: <Update />,
        loader:({params}) => fetch(`https://task-management-server-iota-indol.vercel.app/tasks/${params.id}`)
        // loader:({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)
      },
     
    ],
  },
]);
export default router;
