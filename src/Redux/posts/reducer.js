import {  ADD_POSTS ,DELETE_POST, EDIT_POST, GET_POSTS, UPDATE_POST} from "./actionType";
let initialState={
    posts:[],
    post:{},
    loading:false,
    
}

if(localStorage.getItem('posts')){
    initialState.posts=JSON.parse(localStorage.getItem('posts'));
}else{
    initialState.posts=[]
}
const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POSTS:return{
            ...state,
            posts:[...action.payload],
            loading:false
        }
        case UPDATE_POST:return{
            ...state,
            posts:[...action.payload]
        }
        case DELETE_POST:return{
            ...state,
            posts:[...action.payload],
            
        }
        case GET_POSTS:return{
            ...state,
            posts:action.payload
            
        }
        case EDIT_POST:return{
            ...state,
            post:action.payload
        }
        default: return state
    }
}
export default postReducer;
    
