import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import actionTypes from "../Actions";
import PostReducer, { initialState } from "./PostReducer";

export const PostContext = createContext();
const PostState = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const createPost = async (postData) => {
    setIsPostLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/posts/post",
        postData
      );
      console.log(res);
      dispatch({
        type: actionTypes.CREATE_POST,
        payload: res.data,
      });
      setIsPostLoading(false);
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_POST_FAIL,
        payload: error.message,
      });
      setIsPostLoading(false);
    }
  };

  const getMyPosts = async () => {
    setIsPostLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/posts/my-posts"
      );
      dispatch({
        type: actionTypes.GET_MY_POSTS,
        payload: res.data,
      });
      setIsPostLoading(false);
    } catch (error) {
      dispatch({
        type: actionTypes.GET_MY_POSTS_FAIL,
        payload: error.message,
      });
      setIsPostLoading(false);
    }
  };

  const deletePost = async(id)=>{
    setIsPostLoading(true)
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/posts/delete/${id}`)
      dispatch({
        type:actionTypes.DELETE_POST,
        payload:res.data
      })
      setIsPostLoading(false)
    } catch (error) {
      dispatch({
        type:actionTypes.DELETE_POST_FAIL,
        payload:error.message
      })
    }
  }

  const getPost =async(id)=>{
    setIsPostLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/posts/post/${id}`)
      dispatch({
        type:actionTypes.GET_POST,
        payload:res.data
      })
      setIsPostLoading(false)
    } catch (error) {
      dispatch({
        type:actionTypes.GET_POST_FAIL,
        payload:error.message
      })
      setIsPostLoading(false)
    }
  }


  const updatePost = async(id,data)=>{
    setIsPostLoading(true)
    try {
      const res = await axios.patch(`http://localhost:5000/api/v1/posts/update/${id}`,data)
      dispatch({
        type:actionTypes.UPDATE_POST,
        payload:res.data
      })
      setIsPostLoading(false)
    } catch (error) {
      dispatch({
        type:actionTypes.UPDATE_POST_FAIL,
        payload:error.message
      })
      setIsPostLoading(false)
    }
  }


  const getFeeds = async()=>{
    setIsPostLoading(true)
    try {
      const res= await axios.get('http://localhost:5000/api/v1/posts/posts')
      dispatch({
        type:actionTypes.GET_FEEDS,
        payload:res.data
      })
      setIsPostLoading(false)
    } catch (error) {
      dispatch({
        type:actionTypes.GET_FEEDS_FAIL,
        payload:error.message
      })
      setIsPostLoading(false)
    }
  }
  useEffect(() => {
    getMyPosts();
    getFeeds()
  }, []);


  return (
    <PostContext.Provider
      value={{
        isPostLoading,
        createPost,
        toasts: state.toasts,
        getMyPosts,
        myPosts: state.myPosts,
        deletePost,
        post:state.post,
        getPost,
        updatePost,
        getFeeds,
        feeds:state.feeds
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostState;
