import React, {Component} from 'react';
import { PostDetails } from './posts/single_post/PostDetails';
import { postService } from '../services/postService';
import './SinglePostPage.css';

export class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: true
        }
    }

    componentDidMount = () => {
        const {id, type} = this.props.match.params;
        if (type === 'video') {
            postService.getVideoPost(id)
                .then(post => {
                    this.setState({post, loading: false});
                })
        } else if (type === 'image') {
            postService.getImagePost(id)
                .then(post => {
                    this.setState({post, loading: false});
                })
        } else {
            postService.getTextPost(id)
                .then(post => {
                    this.setState({post, loading: false});
                })
        }
        
    }

    renderPostDetails = () => {
        const {loading, post} = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return <PostDetails post={post} />
    }

    render() {
        return this.renderPostDetails();
    }
}