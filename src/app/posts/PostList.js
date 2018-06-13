import React from 'react';
import './PostList.css';
import { VideoPost } from './VideoPost';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';

export const PostList = props => {

    return (
        <div className='row'>
            <VideoPost />
            <TextPost />
            <ImagePost />
        </div>
    )
}