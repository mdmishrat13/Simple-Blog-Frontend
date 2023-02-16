import Articles from "../Pages/Common/Dashboard/Articles.js/Articles";
import CreatePost from "../Pages/Common/Dashboard/CreatePost/CreatePost";
import Dashboard from "../Pages/Common/Dashboard/Dashboard";
import DashboardMain from "../Pages/Common/Dashboard/DashboardContent/DashboardMain";
import EditPost from "../Pages/Common/Dashboard/EditPost/EditPost";
import EditPassword from "../Pages/Common/Dashboard/Settings/EditPassword";
import EditProfile from "../Pages/Common/Dashboard/Settings/EditProfile";
import Settings from "../Pages/Common/Dashboard/Settings/Settings";
import Feeds from "../Pages/Common/Feeds/Feeds";
import Profile from "../Pages/Common/Profile/Profile";

const UserRoutes = [
  {
    index: true,
    element: <Feeds/>,
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
        path:'create-post',
        element: <CreatePost/>,
      },
      {
        path:'edit-post/:id',
        element: <EditPost/>,
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
    element:<Feeds/>,
  },

  {
    path: "my-posts",
    element: <h1> my post will be there </h1>,
  },
];

export default UserRoutes;
