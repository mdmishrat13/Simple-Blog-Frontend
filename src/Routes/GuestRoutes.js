import Home from "../Pages/Public/Home/Home";
import Login from "../Pages/Public/Login/Login";
import Register from "../Pages/Public/Register/Register";

const GuestRoutes = [
    { 
      index:true,
      element: <Home/>,
    },
    {
      index:true,
      path:'login',
      element: <Login/>,
    },
    {
      path: "register",
      element: <Register/>,
    },
  ];
  
export default GuestRoutes;