import React, { Component } from 'react';
import './FeedPage.css';
import {PostList} from './posts/PostList';
import { postService } from '../services/postService';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true
        }
    }

    componentDidMount = () => {
        postService.getPosts()
            .then(posts => {
                this.setState({posts, loading: false})
            })
            
    }

    renderPosts = () => {
        const {loading, posts} = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return <PostList posts={posts} />
    }
    

    render() {
        return (
        <div className='container'>
            {this.renderPosts()}
        </div>
        )
    }
}


