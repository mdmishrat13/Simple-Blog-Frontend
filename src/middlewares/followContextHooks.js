import { useContext } from "react";
import { FollowContext } from "../Context/FollowContext/FollowState";

const useFollow = ()=>{
   return useContext(FollowContext)
}

export default useFollow;