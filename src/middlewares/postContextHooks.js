import { useContext } from "react";
import { PostContext } from "../Context/PostContext/PostState";

const usePost = ()=>{
   return useContext(PostContext)
}

export default usePost