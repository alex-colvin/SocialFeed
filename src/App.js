import React, { useState } from 'react';
import './App.css';
import './Components/CreatePost/CreatePost'
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post'
import './App.css'


function App() {

  const [posts, setPosts] = useState([{name:'Alex',post:'OMWT Great Wolf Lodge'},{name:'Caitlin',post:'WooHOOO!'}]);

  function addNewPost(post) {
    let tempPosts = [...posts, post ];

        setPosts(tempPosts);
  }

  return (
    <div className="App">
      <header className='App-header'>ALEX COLVIN's WEBSITE FOR POSTING</header>
      <CreatePost createPost={addNewPost} className='post-form'/>
      <DisplayPosts posts={posts} />
      
      
    </div>
  );
}

export default App;
