import React, {Component} from 'react';
import { PostDetails } from './posts/single_post/PostDetails';
import { postService } from '../services/postService';
import './SinglePostPage.css';
import { Loading } from './partials/Loading';

export class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: true
        }
    }

    componentDidMount = async () => {
        const {id, type} = this.props.match.params;
        if (type === 'video') {
            const post = await postService.getVideoPost(id)
            this.setState({post, loading: false});
        } else if (type === 'image') {
            const post = await postService.getImagePost(id)
            this.setState({post, loading: false});
        } else {
            const post = await postService.getTextPost(id)
            this.setState({post, loading: false});
        }
        
    }

    renderPostDetails = () => {
        const {loading, post} = this.state;
        if (loading) {
            return <Loading />
        }
        return <PostDetails post={post} />
    }

    render() {
        return this.renderPostDetails();
    }
}