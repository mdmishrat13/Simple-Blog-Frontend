import actionTypes from "../Actions";

export const initialState = {
    toasts:null,
    comments:null
}


export const CommentReducer = (state,action)=>{
    switch (action.type){
        case actionTypes.CREATE_COMMENT:
            return{
                ...state,
                toasts:action.payload.status
            }
        case actionTypes.CREATE_COMMENT_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.GET_A_POST_COMMENT:
            return{
                ...state,
                comments:action.payload
            }
        case actionTypes.GET_A_POST_COMMENT_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.UPDATE_COMMENT:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.UPDATE_COMMENT_FAIL:
        return{
            ...state,
            toasts:action.payload
        }
            
    }
}