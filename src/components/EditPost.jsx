import React from 'react';
import {  useParams,useNavigate } from 'react-router-dom';
import { useRef,useState } from "react";
import {updatePost,editPost} from '../Redux/posts/actions';
import { useSelector ,useDispatch} from 'react-redux';
import Alert from './Alert';
import '../Styles/AddPosts.css';
const EditPost = () => {
    const dispatch=useDispatch()
    const params=useParams();
    let Id=params.Id
    dispatch(editPost(Id))
    const navigate =useNavigate()
    let post= useSelector(state=>state.posts.post)
    const TitleRef=React.useRef(null);
    const  CategoriesRef=React.useRef(null);
    const ContentRef =React.useRef(null);
    const submitHandler =e=>{
      e.preventDefault();
      post={
          Id,
        Title:TitleRef.current.value,
        Categories:CategoriesRef.current.value,
        Content:ContentRef.current.value,
      }  
      dispatch(updatePost(post));  
        navigate('/',{state:{name:'ReactJs'}})
    }
    return (
            <div className='addBlog'>
                <h2>Update Post</h2>
                <form>
				<div className='addBlog__details'>
					<h3>Title</h3>
					<input defaultValue={post.Title} type="text" ref={TitleRef}/>
					<h3> Categories</h3>
					<input defaultValue={post.Categories} type="text" ref={CategoriesRef}/>
                    <h3>Content</h3>
					<textarea defaultValue={post.Content} ref={ContentRef}/><br/>
                    <button className='btn btn-success' onClick={submitHandler}>Submit</button>
				</div>
			    </form> 
               
        </div>     
    );
}

export default EditPost;