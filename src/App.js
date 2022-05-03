import React, { useState } from 'react';
import './App.css';
import './Components/CreatePost/CreatePost'
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post'


function App() {

  const [posts, setPosts] = useState([{name:'Alex',post:'OMWT Great Wolf Lodge'},{name:'Caitlin',post:'WooHOOO!'}]);

  function addNewPost(post) {
    let tempPosts = [...posts, post ];

        setPosts(tempPosts);
  }

  return (
    <div className="App">
      <CreatePost createPost={addNewPost} />
      <DisplayPosts posts={posts} />
      
      
    </div>
  );
}

export default App;
