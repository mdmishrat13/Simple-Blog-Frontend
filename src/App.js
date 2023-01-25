import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./Assets/Styles/styles.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthState from "./Context/AuthContext/AuthState";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <><AuthState>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthState>
      
    </>
  );
}

export default App;
