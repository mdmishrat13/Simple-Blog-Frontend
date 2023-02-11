import Articles from "../Pages/Common/Dashboard/Articles.js/Articles";
import Dashboard from "../Pages/Common/Dashboard/Dashboard";
import DashboardMain from "../Pages/Common/Dashboard/DashboardContent/DashboardMain";
import EditPassword from "../Pages/Common/Dashboard/Settings/EditPassword";
import EditProfile from "../Pages/Common/Dashboard/Settings/EditProfile";
import Settings from "../Pages/Common/Dashboard/Settings/Settings";
import Profile from "../Pages/Common/Profile/Profile";

const UserRoutes = [
  {
    index: true,
    element: <h1>This is home page</h1>,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardMain/>,
      },
      {
        path:'articles',
        element: <Articles/>,
      },
      {
        path: 'analytics',
        element: <h1>analytics content will be there</h1>,
      },
      {
        path:'settings',
        element:<Settings/>,
        children:[{
          index:true,
          element:<EditProfile/>
        },
        {
          path:'edit-password',
          element:<EditPassword/>
        }
      ]
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "feeds",
    element: <h1>this is feeds page</h1>,
  },

  {
    path: "my-posts",
    element: <h1> my post will be there </h1>,
  },
];

export default UserRoutes;
