import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../Pages/Layout/GuestLayout";
import UserLayout from "../Pages/Layout/UserLayout";
import GuestRoute from "../ProtectedComponants/GuestRoute";
import UserRoute from "../ProtectedComponants/UserRoute";
import GuestRoutes from "./GuestRoutes";
import UserRoutes from "./UserRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element:<GuestRoute><GuestLayout/></GuestRoute>,
      errorElement: <h1>Not found</h1>,
      children: GuestRoutes,
    },
    {
      path: "/user",
      element: <UserRoute><UserLayout /></UserRoute>,
      errorElement: <h1>Not found</h1>,
      children: UserRoutes,
    },
  ]);
  
  export default router;