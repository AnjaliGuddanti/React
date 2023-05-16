import React,{useState} from 'react';
import {addPosts} from '../Redux/posts/actions';
import {useDispatch} from 'react-redux';
import Alert from './Alert';
import uuid from 'react-uuid';
import '../Styles/AddPosts.css';

function AddPosts(props) {
    const dispatch=useDispatch();
    let [posts,setPosts]=useState({Title:'',Categories:'',Content:''});
    const [Title,setTitle]=useState('')
    const [Categories,setCategories]=useState('')
    const [Content,setContent]=useState('')

    const [showAlert, setshowAlert] = useState(false);

    const [error,setError] =useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!Title || !Categories || !Content){
            setError("Please fill all fields");
            
        }else{
        posts={
            Id:uuid(),
            Title,
            Categories,
            Content,
        }
        dispatch(addPosts(posts))
        setshowAlert(true)
        setTimeout(() => {
            setshowAlert(false);
        }, 1000);
        clearForm()
        setError("")
    }
    }
    const clearForm=()=>{
        setTitle("")
        setCategories("")
        setContent("")
    }
    return (
        <div>
             <a href='/'>back to index</a>
             <h2 className='heading'>Add Post</h2>
            <div className='addBlog'>
           <form>
				<div className='addBlog__details'>
					<h3>Title</h3>
					<input value={Title} onChange={(e) => setTitle(e.target.value)} type='text'/>
					<h3> Categories</h3>
					<input value={Categories} onChange={(e) => setCategories(e.target.value)} type='text'/>
                    <h3>Content</h3>
					<textarea value={Content} onChange={(e) => setContent(e.target.value)} type='text'/><br/>
                    <button className='btn btn-danger m-1' onClick={(clearForm)}>clear</button>
                    <button className='btn btn-success m-1' onClick={handleSubmit}>Submit</button>
				</div>
			</form> 
            {error && <h4 style={{color:"red"}}>{error}</h4>}
            
                {showAlert && <Alert/>}
           
        </div>
        </div>
    );
}

export default AddPosts;