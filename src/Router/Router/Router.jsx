import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

import Home from "../../components/components/Homes/Home";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";
import ErrorPages from "../../Shared/ErrorPage/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPages/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
]);
export default router;
