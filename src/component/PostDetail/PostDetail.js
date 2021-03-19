import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id])

    useEffect(() =>{
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    }, [id])
    return (
        <div>
            <h3>This is Friend Detail Component: {id}</h3>
            <p>{post.body}</p>

            <h6>This is no of comment : {comment.length}</h6>
            {
                comment.map(comment=> <Comment comment={comment}></Comment> )
            }
        </div>
    );
};

export default PostDetail;