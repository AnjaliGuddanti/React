import { ADD_POSTS,DELETE_POST, EDIT_POST, GET_POSTS, UPDATE_POST } from "./actionType"

let posts=localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')):[];

export const getPosts =()=>async dispatch=>{
    let posts=localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')):[];
    dispatch({
        type:GET_POSTS,
        payload:posts
    })
}
export const addPosts=post=> async dispatch=>{
        const addPost={
            ...post,
            loading:false
        }
        posts.push(addPost)
        localStorage.setItem('posts',JSON.stringify(posts))
        dispatch({
            type:ADD_POSTS,
            payload:posts
        })
    }
export const deletePost =post=> async dispatch=>{
    const filterPost=posts.filter((element,index)=>{
        return element.Id !== post.Id 
    })
    localStorage.setItem('posts',JSON.stringify(filterPost))
    dispatch({
        type:DELETE_POST,
        payload:posts
    })
}
export const editPost =(postId)=> async dispatch=>{
     let fetchposts=posts.find((element,index)=>{
        return element.Id === postId      
    })
    dispatch({
        type:EDIT_POST,
        payload:fetchposts
    })
}
export const updatePost= post=>async dispatch=>{
   posts=posts.filter((element,index)=>{
    return element.Id !== post.Id 
   })
   posts.push(post)
   localStorage.setItem('posts',JSON.stringify(posts))
    dispatch({
        type:UPDATE_POST,
        payload:posts
    })
}
