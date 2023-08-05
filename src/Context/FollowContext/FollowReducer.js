import actionTypes from "../Actions";

export const initialState = {
    myFollowers:null,
    toasts:[]
}


export const FollowReducer = (state,action)=>{
    switch (action.type){
        case actionTypes.CREATE_FOLLOW:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.CREATE_FOLLOW_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.CREATE_UNFOLLOW:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.CREATE_UNFOLLOW_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.GET_MY_FOLLOWERS:
            return{
                ...state,
                myFollowers:action.payload
            }
        case actionTypes.GET_MY_FOLLOWERS_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
    }
}