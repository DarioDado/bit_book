import React, {Fragment} from 'react';
import { VideoPostBody } from './VideoPostBody';
import { ImagePostBody } from './ImagePostBody';
import { TextPostBody } from './TextPostBody';
import { NewCommentForm } from '../../comments/NewCommentForm';
import { CommentList } from '../../comments/CommentList';


export const PostDetails = props => {
    
    const renderPostBody = () => {
        const { post } = props;
        if (post.type === "video") {
            return <VideoPostBody post={post} />
        } else if (post.type === "image") {
            return <ImagePostBody post={post} />
        } else {
            return <TextPostBody post={post} />
        }
    } 

    return (
        <Fragment>
            {renderPostBody()}
            <NewCommentForm />
            <CommentList postId={props.post.id}/>
        </Fragment>
    )
}