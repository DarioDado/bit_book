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
            hideModal: null
        }
    }

    loadData = () => {
        postService.getPosts()
            .then(posts => {
                this.setState({ posts, loading: false })
            })
    }

    componentDidMount = () => {
        this.loadData();
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
            modalBtn: event.target.parentElement.getAttribute("data-target"),
            hideModal: null
        })
    }

    onCloseModal = (event) => {
        this.setState({
            hideModal: "hide"
        })

    }

    render() {
        return (
            <div className="row">
                <OptionsSidebar />
                {this.renderPosts()}
                <NewPostModal modalBtn={this.state.modalBtn} onCloseModal={this.onCloseModal} hideModal={this.state.hideModal} loadData={this.loadData}/>
                <NewPostButton onClick={this.onNewPostClick} />
            </div>
        )
    }
}
