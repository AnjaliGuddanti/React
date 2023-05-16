import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {editPost,deletePost} from '../Redux/posts/actions';
import { FaThumbsUp } from "react-icons/fa";
import {useState} from 'react';
import '../Styles/Details.css';
function Details(props) {
  
    const navigate=useNavigate();
    const params=useParams();
    let Id=params.Id;
    const initialState=()=>Number(window.localStorage.getItem(Id)) || 0
   const [likes,setLikes]=useState(initialState);
    useEffect(()=>{
        props.editPostById(Id)
    })
    useEffect(()=>{
        window.localStorage.setItem(Id,likes)
    },[likes])
    const deletePostById=()=>{
        props.deletePost(props.post)

        navigate('/',{state:{name:'ReactJs'}})
    }
    const isLiked=()=>{
        setLikes(likes+1)
        console.log(likes)
    }
    return (
        <div>
            
                <div className="header">
                    <div className="bi mt-2">
                        <Link to='/'>back to index</Link>
                    </div>
                    <div className="btn">
                        <button type="button" className="btn btn-danger m-2" onClick={()=>{deletePostById()}}>Delete</button>
                        <button type="button" className="btn btn-primary m-2">
                         <a className="edit" style={{color:"white"}} href={`/editpost/${props.post.Id}`} >Edit</a>
                        </button>
                        <button type="button" className="btn btn-info m-2" onClick={()=>{isLiked()}}>
                            <FaThumbsUp size="1.1em" padding="2px" color="cornflowerblue"/>
                            Likes {likes}
                        </button>
                    </div>

                </div>

            
                 <div className="container mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h3 style={{textAlign:"center"}}>{props.post.Title}</h3>
                            <h6>{props.post.Categories}</h6>
                            <p>{props.post.Content}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

const mapStateToProp=state=>{
    return{
        post:state.posts.post,
        posts:state.posts.posts
    }
    }
const mapdispatchToProps= dispatch=>{
    return{
        editPostById:Id=>dispatch(editPost(Id)),
        deletePost:(post)=>{dispatch(deletePost(post))}  ,
    
    }
}


export default connect(mapStateToProp,mapdispatchToProps)(Details);