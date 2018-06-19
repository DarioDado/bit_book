import React, { Component, Fragment } from 'react';
import './FeedPage.css';
import { PostList } from './posts/PostList';
import { postService } from '../services/postService';
import { OptionsSidebar } from './posts/OptionsSidebar';
import { NewPostButton } from './posts/newPost/NewPostButton';
import NewPostModal from './posts/newPost/NewPostModal';
import { Pagination } from './posts/Pagination';
import { login } from '../shared/constants';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true,
            modalBtn: null,
            hideModal: null,
            filteredPosts: null,
            active: "waves-effect",
            height: window.innerHeight,
            skipMult: 1
        }
    }

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            const top = 10;
            const skip = this.state.skipMult * top;

            postService.getPostsPagination(top, skip)
                .then(posts => {
                    const newSkipMult = this.state.skipMult + 1;
                    const copyPosts = this.state.posts.slice();
                    const newPosts = copyPosts.concat(posts);

                    this.setState({
                        posts: newPosts,
                        loading: false,
                        skipMult: newSkipMult

                    })
                })
        }
    }


    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        this.loadData();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    
    onNewPostClick = (event) => {
        this.setState({
            modalBtn: event.target.parentElement.getAttribute("data-target"),
            hideModal: null
        })
    }

    onCloseModal = (event) => {
        if (event) {
            event.preventDefault();
        }
        this.setState({
            hideModal: "hide"
        })

    }

    onFilterPosts = (event) => {
        const allPosts = this.state.posts;
        if (event.target.value === "all") {
            this.setState({
                filteredPosts: null
            })
        } else {

            const filteredPosts = allPosts.filter(post => {
                return post.type === event.target.value;
            })
            this.setState({
                filteredPosts
            })
        }
    }

    loadData = () => {
        const top = 10;
        const skip = 0;
        postService.getPostsPagination(top, skip)
            .then(posts => {
                this.setState({ posts, loading: false })
            })
    }

    renderPosts = () => {
        const { loading, posts, filteredPosts } = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        if (filteredPosts) {
            return <PostList posts={filteredPosts} />
        } else {

            return <PostList posts={posts} />
        }
    }

    

    render() {
        return (
            <Fragment>
                <div className="row" >
                    <OptionsSidebar onFilterPosts={this.onFilterPosts} loadData={this.loadData} />
                    {this.renderPosts()}
                    <NewPostModal modalBtn={this.state.modalBtn} onCloseModal={this.onCloseModal} hideModal={this.state.hideModal} loadData={this.loadData} />
                    <NewPostButton onClick={this.onNewPostClick} />
                </div>
            </Fragment>
        )
    }
}
