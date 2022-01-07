import React from 'react';
import QueryBox from './queryBox';
import Post from './post';
import "./css/feed.css";

function feed() {
    return (
        <div className='feed'>
            <QueryBox/>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}

export default feed
