import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    let post;
    if(allPosts < 5){
        post =  'записи';
    } else {
        post = 'записей';
    }
    return (
        <div className="app-header d-flex">
            <h1>Social React</h1>
            <h2>{allPosts} {post}, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;