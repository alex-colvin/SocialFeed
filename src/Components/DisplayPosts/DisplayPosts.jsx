import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return (
        <div className='message-board'>
        <h2>Take a look at what everyone is talking about!</h2>         
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