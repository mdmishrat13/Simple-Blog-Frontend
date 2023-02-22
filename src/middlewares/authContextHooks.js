import { useContext } from "react";
import {AuthContext} from '../Context/AuthContext/AuthState';

const useAuth = ()=>{
   return useContext(AuthContext)
}

export default useAuth;