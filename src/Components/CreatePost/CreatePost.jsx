import React, { useState } from 'react';
import './CreatePost.css'

const CreatePost = (props) => {

    const [name, setName] = useState();
    const [post, setPost] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        }
    props.createPost(newPost)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-label'>
                    <label>Name: </label>
                    <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}  />
                </div>
                <div className='form-group'>
                    <label>What would you like to share? </label>
                    <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
                </div>
                <div className='btn-wrap'><button className='btn btn-primary' type='submit'>Post</button></div>
            </form>
        </div>



     );
}
 
export default CreatePost;

// onChange={(event) => setPost(parseFloat(event.target.value))}
// onChange={(event) => setName(parseFloat(event.target.value))} 