import React, { Component, Fragment } from 'react';
import './FeedPage.css';
import { PostList } from './posts/PostList';
import { postService } from '../services/postService';
import { OptionsSidebar } from './posts/OptionsSidebar';
import { Pagination } from './posts/Pagination';
import { login } from '../shared/constants';
import { NewPost } from './posts/newPost/NewPost';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true,
            filteredPosts: null,
            postsCount: 0,
            active: "waves-effect"
        }
    }

    // loadData = () => {
    //     postService.getPosts()
    //         .then(posts => {
    //             this.setState({ posts, loading: false })
    //         })
    // }


    componentDidMount = () => {
        this.loadInitialData();
        this.countPosts();
    }

    
    onFilterPosts = (event) => {
        const chosenOption = event.target.value 
        postService.getPosts()
            .then(posts => {
                if (chosenOption === "all") {
                    this.setState({
                        filteredPosts: null
                    })
                } else {
                    const filteredPosts = posts.filter(post => {
                        return post.type === chosenOption;
                    })
                    this.setState({
                        filteredPosts
                    })

                }
            })
    }

    loadPaginationData = (event) => {
        event.preventDefault();
        const top = 10;
        const pageNum = event.target.id
        const skip = (pageNum - 1) * top;
        console.log(event.target.parentElement);

        postService.getPostsPagination(top, skip)
            .then(posts => {
                this.setState({
                    posts,
                    loading: false,
                })
            })
        window.scrollTo(0, 0);
    }

    loadInitialData = () => {
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

    countPosts = () => {
        postService.getPostsCount()
            .then(postsCount =>
                this.setState({
                    postsCount
                })
            )

    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <OptionsSidebar onFilterPosts={this.onFilterPosts} loadData={this.loadData} />
                    {this.renderPosts()}
                    <NewPost />
                </div>
                <div className="row ">
                    <Pagination loadPaginationData={this.loadPaginationData} postsCount={this.state.postsCount} active={this.state.active} pageNum={this.props.match.params.pageNum} />
                </div>
            </Fragment>
        )
    }
}
