import axios from "axios";
import { createContext, useReducer, useState } from "react";
import actionTypes from "../Actions";
import { CommentReducer, initialState } from "./CommentReducer";
import { type } from "@testing-library/user-event/dist/type";

export const CommentContext = createContext();

const CommentState = ({ children }) => {
  const [state, dispatch ] = useReducer(CommentReducer, initialState);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const createComment = async (data) => {
    setIsCommentLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/comment/comment",
        data
      );
      dispatch({
        type: actionTypes.CREATE_COMMENT,
        payload: res.data,
      });
      setIsCommentLoading(false);
      return res.data
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_COMMENT_FAIL,
        payload: error.message,
      });
      setIsCommentLoading(false);
    }
  };

  const getComment = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/comment/comments/${id}`);
      dispatch({
        type:actionTypes.GET_A_POST_COMMENT,
        payload:res.data
      })
      return res.data
    } catch (error) {
      dispatch({
        type: actionTypes.GET_A_POST_COMMENT_FAIL,
        payload: error.message,
      });
    }
  };

  const updateComment = async(id,data)=>{
    setIsCommentLoading(true)
    try {
      const res = await axios.patch(`http://localhost:5000/api/v1/comment/comment/${id}`,data)
      dispatch({
        type:actionTypes.UPDATE_COMMENT,
        payload:res.data
      })
      setIsCommentLoading(false)
      return res.data
    } catch (error) {
      dispatch({
        type:actionTypes.UPDATE_COMMENT_FAIL,
        payload:error.message
      })
      console.log(error.message)
      setIsCommentLoading(false)
    }
  }

  const deleteComment = async(id)=>{
    setIsCommentLoading(true)
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/comment/comment/${id}`)
      dispatch({
        type:actionTypes.DELETE_COMMENT,
        payload:res.data
      })
      setIsCommentLoading(false)
      return res.data
    } catch (error) {
      dispatch({
        type:actionTypes.DELETE_COMMENT_FAIL,
        payload:error.message
      })
    }
  }
  return (
    <CommentContext.Provider
      value={{
        comments: state?.comments,
        isCommentLoading,
        createComment,
        getComment,
        updateComment,
        deleteComment
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentState;
