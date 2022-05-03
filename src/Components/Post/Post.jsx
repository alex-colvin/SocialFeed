
const Post = (props) => {
    return(
        <>
            <div>{props.name}</div>
            <div>{props.post}</div>          
            <div>
                <button>Like</button>
                <button>Not Like</button>
            </div>
        </>
    );
}

export default Post