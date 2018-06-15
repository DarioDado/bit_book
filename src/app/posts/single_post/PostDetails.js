import React, { Fragment, Component } from 'react';
import { commentService } from '../../../services/commentServces';
import { VideoPostBody } from './VideoPostBody';
import { ImagePostBody } from './ImagePostBody';
import { TextPostBody } from './TextPostBody';
import { NewCommentForm } from '../../comments/NewCommentForm';
import { CommentList } from '../../comments/CommentList';


export class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: null,
            loading: true
        }
    }

    componentDidMount = () => {
        const { post } = this.props;
        commentService.getSinglePostComments(post.id)
            .then(comments => {
                this.setState({ comments, loading: false })
            })
    }

    renderCommentList = () => {
        const { loading, comments } = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return <CommentList comments={comments} />
    }

    renderPostBody = () => {
        const { post } = this.props;
        if (post.type === "video") {
            return <VideoPostBody post={post} />
        } else if (post.type === "image") {
            return <ImagePostBody post={post} />
        } else {
            return <TextPostBody post={post} />
        }
    }

    onCreateCommentHandler = () => {
        const { post } = this.props;
        commentService.getSinglePostComments(post.id)
            .then(comments => {
                this.setState({ comments, loading: false })
            })

    }

    render() {
        const { post } = this.props;
        return (
            <Fragment>
                {this.renderPostBody()}
                <NewCommentForm postId={post.id} onCreateCommentHandler={this.onCreateCommentHandler} />
                {this.renderCommentList()}
            </Fragment>
        )
    }

}