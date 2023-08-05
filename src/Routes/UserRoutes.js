import Articles from "../Pages/Common/Dashboard/Articles.js/Articles";
import CreatePost from "../Pages/Common/Dashboard/CreatePost/CreatePost";
import Dashboard from "../Pages/Common/Dashboard/Dashboard";
import DashboardMain from "../Pages/Common/Dashboard/DashboardContent/DashboardMain";
import EditPost from "../Pages/Common/Dashboard/EditPost/EditPost";
import EditPassword from "../Pages/Common/Dashboard/Settings/EditPassword";
import ChangeName from "../Pages/Common/Dashboard/Settings/ChangeName";
import ProfilePicture from "../Pages/Common/Dashboard/Settings/ProfilePicture";
import Settings from "../Pages/Common/Dashboard/Settings/Settings";
import Feeds from "../Pages/Common/Feeds/Feeds";
import Profile from "../Pages/Common/Profile/Profile";
import PublicProfile from "../Pages/Common/PublicProfile/PublicProfile";
import Writters from "../Pages/Common/Writters/Writters";

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
          element:<ProfilePicture/>
        },
      {
        path:'edit-name',
        element:<ChangeName/>
      },
      {
        path:'change-password',
        element:<EditPassword/>
      },
    ]
  }
]},
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:id",
    element: <PublicProfile/>,
  },
  {
    path: "feeds",
    element:<Feeds/>,
  },

  {
    path: "my-posts",
    element: <h1> my post will be there </h1>,
  },
  {
    path: "writters",
    element:<Writters/>,
  },
];

export default UserRoutes;
