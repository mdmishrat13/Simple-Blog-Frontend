import actionTypes from "../Actions"
export const initialState = {
    toasts:null,
    myPosts:[]
}

const PostReducer = (state,action)=>{
    switch(action.type){
        case actionTypes.CREATE_POST:
            return{
                ...state,
                toasts:action.payload.status,
                myPosts:[...state.myPosts,action.payload.data]
            }
        case actionTypes.CREATE_POST_FAIL:
            return{
                ...state,
                toasts:action.payload
            }

        case actionTypes.GET_MY_POSTS:
            return{
                ...state,
                myPosts:action.payload
            }
        case actionTypes.GET_MY_POSTS_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
    }
}

export default PostReducer