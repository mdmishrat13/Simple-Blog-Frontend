import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./Assets/Styles/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthState from "./Context/AuthContext/AuthState";
import axios from "axios";
import PostState from "./Context/PostContext/PostState";
import CommentState from "./Context/CommentContext/CommentState";
import ReactState from "./Context/ReactContext/ReactState";
import FollowState from "./Context/FollowContext/FollowState";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthState>
        <PostState>
          <CommentState>
          <ReactState>
          <FollowState>
          <RouterProvider router={router} />
          <ToastContainer />
          </FollowState>
          </ReactState>
          </CommentState>
        </PostState>
      </AuthState>
    </>
  );
}

export default App;
