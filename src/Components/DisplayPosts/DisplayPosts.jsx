import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return (
        <>
        <h1>Feed</h1>         
          <>
              {props.posts.map((entry, index) => {              
                return(
                <div key={index}>
                    <Post name={entry.name} post={entry.post}/>
                </div>
                )
              })}
          </>
          </>       
     );
}

export default DisplayPosts