import React, { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const [comment, setComment] = useState([]);
    const getId = useSelector((state) => state.movies.movieId)
    
    
    
    const intialComments = {
        username: '',
        comment_msg: ''
    }
    
    const [commentValue, setCommentValue] = useState(intialComments);
    
    const getComments = () => {
        axios
        .get(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${getId}/comments`)
        .then(res => setComment(res.data))
    }
    useEffect(() => {
        getComments();
    }, [getId]);
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        axios
        .post(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${getId}/comments`, commentValue)
        .catch(err => console.log('Error on Submit post', err))
        .finally(() => {
            setCommentValue(intialComments);
            getComments();
        });
        
        
    }
    
    
    
    return (
        <div className='sidebar'>
           <div className="comment-header">
               <h2>Comments</h2>
           </div>
           <div className="comment-out">
               {comment && comment.map((comment) => (
                   <div className="user-comment">
                   <h4>{comment?.username}</h4>
                   <p>{comment?.comment_msg}</p>
               </div>
               ))}
           </div>
           
           <form action="#" onSubmit={onSubmit}>
               <input 
               className='form-control username-input' 
               type="text" 
               placeholder='Username'
               onChange={(e) => setCommentValue({...commentValue, username: e.target.value})}
               />
               <input 
               className='form-control comment-input' 
               type="text" 
               placeholder='Comment...'
               onChange={(e) => setCommentValue({...commentValue, comment_msg: e.target.value})}
               />
               <button type="submit" className='post-btn'>POST</button>
           </form>
        </div>
    )
}

export default Sidebar;