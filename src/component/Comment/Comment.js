import React from 'react';

const Comment = (props) => {
    const {name,email} = props.comment;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>

        </div>
    );
};

export default Comment;