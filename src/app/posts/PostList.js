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
                return <ImagePost post={post}  key={post.id}/>
            } else if (post.type === "video") {
                return <VideoPost post={post} key={post.id}/>
            } else {
                return <TextPost post={post} key={post.id}/>
            }
        })
    }

    return (
        <div className='col s12 m9'>
            {renderPosts()}
        </div>
    )
}