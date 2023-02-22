import axios from "axios";
import { createContext, useReducer, useState } from "react";
import actionTypes from "../Actions";
import { CommentReducer, initialState } from "./CommentReducer";

export const CommentContext = createContext();

const CommentState = ({ children }) => {
  const { state, dispatch } = useReducer(CommentReducer, initialState);
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
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_COMMENT_FAIL,
        payload: error.message,
      });
      setIsCommentLoading(false)
    }
  };
  return (
    <CommentContext.Provider value={{ createComment ,isCommentLoading}}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentState;
