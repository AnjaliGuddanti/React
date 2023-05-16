import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getPosts} from '../Redux/posts/actions';
import '../Styles/Home.css';
import {useSelector,useDispatch} from 'react-redux';
function Home(props) {
    const navigate=useNavigate();
   const dispatch=useDispatch();
   useEffect(()=>{
       dispatch(getPosts());
   },[])
    const posts= useSelector(state=>state.posts.posts)
    console.log(posts)
    return (
        <div>
            <div className='homePage'>
                <button type="button" className='btn btn-success' onClick={()=>navigate('/AddPosts',{state:{name:'ReactJs'}})}>
                    New Post
                </button>
             </div>  
             {  posts.length>0 && 
                    posts.map(post=>(
             <div className="container ">
                <div className="card">
                    <a style={{textDecoration: "none"}} href={`/view/${post.Id}`}>
                        <div className="card-body"  key={post.Id}>
                            {post.Title}
                        </div>
                    </a>  
                </div>  
            </div>
             ))}
        </div>
    );
}


export default (Home);