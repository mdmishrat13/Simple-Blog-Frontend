import actionTypes from "../Actions";

export const initialState = {
    toasts:null,
    likes:[]

}

const ReactReducer = (state,action)=>{
    switch (action.types){
        case actionTypes.CREATE_LIKE:
            return{
                ...state,
                // likes:[...likes,action.payload]
            }
        case actionTypes.CREATE_LIKE_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.REMOVE_LIKE:
            return{
                ...state,
                // likes:[...likes,likes.filter(like=>like._id!==action.payload._id)]
                }
        case actionTypes.GET_LIKES:
            return{
                ...state,
                toasts:action.payload
            }
        case actionTypes.GET_LIKES_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
        
    }
}

export default ReactReducer