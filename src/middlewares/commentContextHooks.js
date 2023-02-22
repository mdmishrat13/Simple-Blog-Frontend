import { useContext } from "react";
import { CommentContext } from "../Context/CommentContext/CommentState";

const useComment = ()=>{
   return useContext(CommentContext)
}

export default useComment;