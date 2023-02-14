import actionTypes from "../Actions"
export const initialState = {
    toasts:null
}

const PostReducer = (state,action)=>{
    switch(action.type){
        case actionTypes.CREATE_POST:
            return{
                ...state,
                toasts:action.payload.status
            }
        case actionTypes.CREATE_POST_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
    }
}

export default PostReducer