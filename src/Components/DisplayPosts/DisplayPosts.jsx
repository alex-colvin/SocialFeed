import Post from '../Post/Post';
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
        <div className='message-board'>
        <div className='display-head'>Take a look at what everyone is talking about!</div>         
          <>
              {props.posts.map((entry, index) => {              
                return(
                <div key={index}>
                    <Post name={entry.name} post={entry.post}/>
                </div>
                )
              })}
          </>
          </div>       
     );
}

export default DisplayPosts