import Dashboard from "../Pages/Common/Dashboard/Dashboard";
import DashboardMain from "../Pages/Common/Dashboard/DashboardContent/DashboardMain";
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
        element: <h1>articles content will be there</h1>,
      },
      {
        path: 'analytics',
        element: <h1>analytics content will be there</h1>,
      },
      {
        path:'settings',
        element: <h1>settings content will be there</h1>,
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
