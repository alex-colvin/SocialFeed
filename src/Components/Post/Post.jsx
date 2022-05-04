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
        <div className='post'>
            <h5>{props.name}</h5>
            <div className='post-text'>{props.post}</div>          
            <div className='buttons-div'>
                <div className='button-div'>
                    <button className={likeTrue ? 'btn btn-primary': 'btn btn-outline-primary'} onClick={() => {likePost()}}>{like}</button>
                </div>
                <div className='button-div'>
                    <button className={dislikeTrue ? 'btn btn-danger': 'btn btn-outline-danger'}  onClick={() => {dislikePost()}}>{dislike}</button>
                </div>
            </div>
            <div className='date'>{timeCreated}</div>
        </div>
    );
}

export default Post