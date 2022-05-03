import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}  />
            </div>
            <div>
                <label>What would you like to share?</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit'>Post</button>
        </form>



     );
}
 
export default CreatePost;

// onChange={(event) => setPost(parseFloat(event.target.value))}
// onChange={(event) => setName(parseFloat(event.target.value))} 