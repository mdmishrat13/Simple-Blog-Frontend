import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import actionTypes from "../Actions";
import { FollowReducer, initialState } from "./FollowReducer";

export const FollowContext = createContext();

const FollowState = ({ children }) => {
  const [state, dispatch ] = useReducer(FollowReducer, initialState);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const createFollow = async (data) => {
    setIsFollowLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/follow/follow",
        data
      );
      dispatch({
        type: actionTypes.CREATE_FOLLOW,
        payload: res.data,
      });
      setIsFollowLoading(false);
      return res.data
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_FOLLOW_FAIL,
        payload: error.message,
      });
      setIsFollowLoading(false);
    }
  };

  
  const getFollowing = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/follow/follow/${id}`);
      // dispatch({
      //   type:actionTypes.GET_MY_FOLLOWERS,
      //   payload:res.data
      // })
      return res.data
    } catch (error) {
      // dispatch({
      //   type: actionTypes.GET_MY_FOLLOWERS_FAIL,
      //   payload: error.message,
      // });
    }
  };
  const getFollowers= async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/follow/followers`);
      dispatch({
        type:actionTypes.GET_MY_FOLLOWERS,
        payload:res.data
      })
      return res.data
    } catch (error) {
      dispatch({
        type: actionTypes.GET_MY_FOLLOWERS_FAIL,
        payload: error.message,
      });
    }
  };


  const unFollow = async(id)=>{
    setIsFollowLoading(true)
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/follow/following/${id}`)
      dispatch({
        type:actionTypes.CREATE_UNFOLLOW,
        payload:"unfollowed successfull"
      })
      setIsFollowLoading(false)
      return res.data
    } catch (error) {
      dispatch({
        type:actionTypes.CREATE_UNFOLLOW_FAIL,
        payload:error.message
      })
    }
  }

  return (
    <FollowContext.Provider
      value={{
        myFollowers: state?.myFollowers,
        isFollowLoading,
        createFollow,
        getFollowing,
        unFollow,
        getFollowers
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};

export default FollowState;
