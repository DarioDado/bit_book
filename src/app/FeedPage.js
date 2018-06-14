import React, { Component } from 'react';
import './FeedPage.css';
import { PostList } from './posts/PostList';
import { postService } from '../services/postService';
import { OptionsSidebar } from './posts/OptionsSidebar';
import { NewPostButton } from './posts/newPost/NewPostButton';
import NewPostModal from './posts/newPost/NewPostModal';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true,
            modalBtn: null,
        }
    }

    componentDidMount = () => {
        postService.getPosts()
            .then(posts => {
                this.setState({ posts, loading: false })
            })
    }

    renderPosts = () => {
        const { loading, posts } = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return <PostList posts={posts} />
    }


    onNewPostClick = (event) => {
        this.setState({
            modalBtn: event.target.parentElement.getAttribute("data-target")
        })
    }

   

    render() {
        return (
            <div className="row">
                <OptionsSidebar />
                {this.renderPosts()}
                <NewPostModal modalBtn={this.state.modalBtn} onCloseModal={this.onCloseModal} />
                <NewPostButton onClick={this.onNewPostClick} />
            </div>
        )
    }
}
