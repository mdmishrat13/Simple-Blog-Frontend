import actionTypes from "../Actions"
export const initialState = {
    toasts:null,
    myPosts:[],
    post:null,
    feeds:[]
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

        case actionTypes.DELETE_POST:
            return{
                ...state,
                toasts:action.payload,
            }
        case actionTypes.DELETE_POST_FAIL:
            return{
                ...state,
                toasts:action.payload
            }

        case actionTypes.GET_POST:
            return{
                ...state,
                post:action.payload
            }
        case actionTypes.GET_POST_FAIL:
            return{
                ...state,
                toast:action.payload
            }

        case actionTypes.UPDATE_POST:
            return{
                ...state,
                toast:action.payload.status,
                post:action.payload.data
            }
        case actionTypes.UPDATE_POST_FAIL:
            return{
                ...state,
                toast:action.payload
            }

        case actionTypes.GET_FEEDS:
            return{
                ...state,
                feeds:action.payload
            }
        case actionTypes.GET_FEEDS_FAIL:
            return{
                ...state,
                toasts:action.payload
            }
    }
}

export default PostReducer