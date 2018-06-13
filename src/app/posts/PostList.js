import React from 'react';
import './PostList.css';
import { VideoPost } from './VideoPost';
import { TextPost } from './TextPost';
import { ImagePost } from './ImagePost';

export const PostList = props => {

    const {posts} = props;

    const renderPosts = () => {
        return posts.map(post => {
            if (post.type === "image") {
                return <ImagePost post={post} />
            } else if (post.type === "video") {
                return <VideoPost post={post} />
            } else {
                return <TextPost post={post} />
            }
        })
    }

    return (
        <div className='row'>
            {renderPosts()}
        </div>
    )
}