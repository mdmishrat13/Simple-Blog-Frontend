import { createContext, useReducer } from "react";
import axios from "axios";
import { AuthReducer, InitialState } from "./AuthReducer";
import actionTypes from "../Actions";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialState);
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [isAuthLoading,setAuthIsLoading] = useState(true)

  const registerUser = async (registerData) => {
    try {
      setAuthIsLoading(true)
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        registerData
      );
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
      checkAuthenticated()
      setAuthIsLoading(false)
    } catch (error) {
      dispatch({
        type: actionTypes.REGISTER_FAILED,
        payload: error.response.data,
      });
      setAuthIsLoading(false)
    }
  };

  const loginUser = async (loginData) => {
    try {
      setAuthIsLoading(true)
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        loginData
      );
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log('checking logged in user',res.data)
      checkAuthenticated()
      setAuthIsLoading(false)
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        payload: error.response.data,
      });
      setAuthIsLoading(false)
    }
  };

  const logoutUser =async() => {
    try {
      setAuthIsLoading(true)
      await axios.get('http://localhost:5000/api/v1/auth/logout')
      checkAuthenticated()
      dispatch({
        type:actionTypes.LOGOUT
      })
      setAuthIsLoading(false)
    } catch (error) {
      setAuthIsLoading(false)
    }
    
  };

  const clearErrors = () => {
    dispatch({
      type: actionTypes.CLEAR_ERRORS,
    });
    checkAuthenticated()
  };

  const checkAuthenticated = async () => {
    setAuthIsLoading(true)
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/checkloggedin");
      setIsAuthenticated(res.data)
      setAuthIsLoading(false)
    } catch (error) {
      setIsAuthenticated(false)
      setAuthIsLoading(false)
    }
  };

  
  const getProfile = async(id)=>{
    setAuthIsLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/auth/profile/${id}`);
      dispatch({
        type:actionTypes.GET_USER_PROFILE,
        payload:res.data
      })
      setAuthIsLoading(false)
    } catch (error) {
      dispatch({
        type:actionTypes.GET_USER_PROFILE_FAIL,
        payload:{errorMessage:'There is an error'}
      })
      setAuthIsLoading(false)
    }
  }

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/user");
      dispatch({
        type: actionTypes.GET_USER,
        payload: res.data,
      });
    } catch (error) {
      console.info(error);
      dispatch({
        type: actionTypes.GET_USER_FAIL,
        payload: error.response.data,
      });
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/auth/users");
      dispatch({
        type: actionTypes.GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.info(error);
      dispatch({
        type: actionTypes.GET_USER_FAIL,
        payload: error.response.data,
      });
    }
  };
  useEffect(()=>{
    checkAuthenticated()
    getUser()
    getUsers()
  },[])


  return (
    <AuthContext.Provider
      value={{
        toasts: state.toasts,
        currentUser:state.currentUser,
        profile:state.profile,
        users:state.users,
        registerUser,
        loginUser,
        logoutUser,
        clearErrors,
        isAuthenticated,
        checkAuthenticated,
        isAuthLoading,
        getUsers,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
