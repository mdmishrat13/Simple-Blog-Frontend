import axios from "axios";
import { createContext, useReducer, useState } from "react";
import actionTypes from "../Actions";
import PostReducer, { initialState } from "./PostReducer";

export const PostContext = createContext();
const PostState = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const [isPostLoading, setIsPostLoading] = useState(true);

  const createPost = async (postData) => {
    setIsPostLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/posts/post",postData);
      console.log(res)
      dispatch({
        type: actionTypes.CREATE_POST,
        payload: res.data,
      });
      setIsPostLoading(false)
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_POST_FAIL,
        payload:error.message,
      });
      setIsPostLoading(false)
    }
  };

  return (
    <PostContext.Provider
      value={{
        isPostLoading,
        createPost,
        toasts:state.toasts
      }}
    >
      {children}
    </PostContext.Provider>
  );


};
export default PostState