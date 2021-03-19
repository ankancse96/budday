import React from 'react';
import { useHistory } from 'react-router';


const Post = (props) => {
    const {title,id} = props.post;
    const history = useHistory();
    const showDetails = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        
        <div>
            <p>Id:{id}</p>
            <h4>Title:{title}</h4>
            
                <button onClick={()=> showDetails(id)}>more read</button>
            
            
        </div>
    );
};

export default Post;