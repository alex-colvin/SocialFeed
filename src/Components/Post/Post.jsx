import React, { useState, useEffect } from 'react';
import './Post.css'

const Post = (props) => {

    const [like, setLike] = useState('Like')
    const [dislike, setDislike] = useState('Dislike')
    const [likeTrue, setLikeTrue] = useState(false);
    const [dislikeTrue, setDislikeTrue] = useState(false);

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
        <>
            <div>{props.name}</div>
            <div>{props.post}</div>          
            <div>
                <button className={likeTrue ? 'likeButton': null} onClick={() => {likePost()}}>{like}</button>
                <button className={dislikeTrue ? 'dislikeButton': null}  onClick={() => {dislikePost()}}>{dislike}</button>
            </div>
        </>
    );
}

export default Post