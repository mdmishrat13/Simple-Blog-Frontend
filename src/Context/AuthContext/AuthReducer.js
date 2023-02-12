import useAuth from "../../middlewares/contextHooks";
import actionTypes from "../Actions"

export const InitialState = {
    toasts:null,
  };

export const AuthReducer= (state,action)=>{
    switch (action.type){
    case actionTypes.LOGIN_FAIL:
        case actionTypes.REGISTER_FAILED:
            return {
                ...state,
                toast:action.payload,
                
            }
    case actionTypes.AUTH_ERROR:
        return{
            ...state,
            toasts:action.payload,
        }

    case actionTypes.REGISTER_SUCCESS:
        return{
            ...state,
            toasts:action.payload.status,

        }
    case actionTypes.LOGIN_SUCCESS:
        return{
            ...state,
            toasts:action.payload.status,
        }

    case actionTypes.CLEAR_ERRORS:
        return{
            ...state,
            toasts:null
        }
    case actionTypes.LOGOUT:
        return {
            ...state,
            toasts:null
        }
    
}}