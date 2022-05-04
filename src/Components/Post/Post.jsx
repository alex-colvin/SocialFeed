import React, { useState, useEffect } from 'react';
import './Post.css'

const Post = (props) => {
    
    const [like, setLike] = useState('Like')
    const [dislike, setDislike] = useState('Dislike')
    const [likeTrue, setLikeTrue] = useState(false);
    const [dislikeTrue, setDislikeTrue] = useState(false);
    const [timeCreated, setTimeCreated] = useState();

    useEffect(() => {
        let timeStamp = (new Date())
        setTimeCreated(`Posted ${timeStamp.getMonth()}/${timeStamp.getDate()}/${timeStamp.getFullYear()}`);
    }, []);

    useEffect(() => {
        if(likeTrue){
            setLike('Liked')
            setDislikeTrue(false)
        }
        else{
            setLike('Like')
        }
    }, [likeTrue]);

    useEffect(() => {
        if(dislikeTrue){
            setDislike('Disliked')
            setLikeTrue(false)
        }
        else{
            setDislike('Dislike')
        }
    }, [dislikeTrue]);
    
    function likePost(){
       setLikeTrue(!likeTrue)
    }

    function dislikePost(){
        setDislikeTrue(!dislikeTrue)
    }
    
    return(
        <div className=''>
            <h4>{props.name}</h4>
            <div>{props.post}</div>          
            <div>
                <button className={likeTrue ? 'btn btn-primary': 'btn btn-outline-primary'} onClick={() => {likePost()}}>{like}</button>
                <button className={dislikeTrue ? 'btn btn-danger': 'btn btn-outline-danger'}  onClick={() => {dislikePost()}}>{dislike}</button>
            </div>
            <div>{timeCreated}</div>
        </div>
    );
}

export default Post