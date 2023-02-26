import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import actionTypes from "../Actions";
import ReactReducer, { initialState } from "./ReactReducer";


export const ReactContext = createContext()

const ReactState = ({children})=>{
    const [state, dispatch] = useReducer(ReactReducer, initialState);
  const [isReactLoading, setIsReactLoading] = useState(false);

  const createLike = async(post)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/v1/reacts/like',{post})
        // dispatch({
        //     type:actionTypes.CREATE_LIKE,
        //     payload:res.data
        // })
        return res.data
    } catch (error) {
        // dispatch({
        //     type:actionTypes.CREATE_LIKE_FAIL,
        //     payload:error.message
        // })
        console.log(error.message)
    }
  } 
  const removeLike = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:5000/api/v1/reacts/like/${id}`)
        // dispatch({
        // type:actionTypes.REMOVE_LIKE,
        // payload:res.data
        // })
        return res.data
    } catch (error) {
        console.log(error.message)
        // dispatch({
        //     type:actionTypes.REMOVE_LIKE_FAIL,
        //     payload:error.message
        // })
    }
  }

  const getLikes = async(id)=>{
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/reacts/like/${id}`)
        // dispatch({
        //     type:actionTypes.GET_LIKES,
        //     payload:res.data
        // })
        return res.data
    } catch (error) {
        // dispatch({
        //     type:actionTypes.GET_LIKES_FAIL,
        //     payload:error.message
        // })
        console.log(error.message)
    }
  }
  const checkLiked = async(id)=>{
    try {
        const res = await axios(`http://localhost:5000/api/v1/reacts/liked/${id}`)
        return res
    } catch (error) {
        return false
    }
  }

  return <ReactContext.Provider value={{getLikes,createLike,removeLike,checkLiked}}>{children}</ReactContext.Provider>
}

export default ReactState

