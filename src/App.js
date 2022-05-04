import React, { useState } from 'react';
import './App.css';
import './Components/CreatePost/CreatePost'
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name:'Alex',post:'OMWT Great Wolf Lodge'},{name:'Caitlin',post:'WooHOOO!'}]);

  function addNewPost(post) {
    let tempPosts = [...posts, post ];

        setPosts(tempPosts);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div className='navbar'>
          <h2>ALEX COLVIN'S WEBSITE FOR POSTING ABOUT THINGS</h2>
            <NavBar />
        </div>
      </header>
      <CreatePost createPost={addNewPost} className='post-form'/>
      <DisplayPosts posts={posts} />     
    </div>
  );
}

export default App;
