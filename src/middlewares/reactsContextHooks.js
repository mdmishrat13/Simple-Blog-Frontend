import { useContext } from "react";
import { ReactContext } from "../Context/ReactContext/ReactState";

const useReact = ()=>{
   return useContext(ReactContext)
}

export default useReact