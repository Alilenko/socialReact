import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({data, onDelete, onToggleLike, onToggleImportant}) => {

 
    const elements = data.map((item) => {
        return(
            <li key={item.id} className='list-group-item'>
                <PostListItem  {...item} 
                onDelete={() => onDelete(item.id)} 
                onToggleLike={() => onToggleLike(item.id)}
                onToggleImportant={() => onToggleImportant(item.id)}
                />
            </li>
        )
    })

    return (
        <ul className = "app-list list-group">
            {elements}
        </ul>
    )
}


export default PostList;