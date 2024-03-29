import actionTypes from "../Actions"

export const InitialState = {
    toasts:[],
    currentUser:null,
    profile:null,
    users:null
  };

export const AuthReducer= (state,action)=>{
    switch (action.type){
    case actionTypes.LOGIN_FAIL:
        case actionTypes.REGISTER_FAILED:
            return {
                ...state,
                // toasts:[...toasts,action.payload],
                toasts:action.payload
                
            }
    case actionTypes.AUTH_ERROR:
        return{
            ...state,
            // toasts:[...toasts,action.payload],
        }

    case actionTypes.REGISTER_SUCCESS:
        return{
            ...state,
            currentUser:action.payload.data,
            toasts:action.payload.status,

        }
    case actionTypes.LOGIN_SUCCESS:
        return{
            ...state,
            currentUser:action.payload.data,
            toasts:action.payload.status,
        }
    case actionTypes.GET_USER:
        return{
            ...state,
            currentUser:action.payload,
        }
    case actionTypes.GET_USER_FAIL:
        return{
            ...state,
            // toasts:[...toasts,action.payload.errorMessage],
            currentUser:null
        }
    case actionTypes.GET_USER_PROFILE:
        return{
            ...state,
            profile:action.payload
        }
    case actionTypes.GET_USER_FAIL:
        return{
            ...state,
            // toasts:[...toasts,action.payload.errorMessage]
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

    case actionTypes.GET_USERS:
        return{
            ...state,
            users:action.payload
        }
    case actionTypes.GET_USERS_FAIL:
        return{
            ...state,
            toasts:action.payload
        }
    
}}