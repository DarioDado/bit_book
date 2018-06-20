import React, { Component, Fragment } from 'react';
import './FeedPage.css';
import { PostList } from './posts/PostList';
import { postService } from '../services/postService';
import { OptionsSidebar } from './posts/OptionsSidebar';
import { Loading } from './partials/Loading';
import { NewPost } from './posts/newPost/NewPost';



export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            loading: true,
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
            return <Loading />
        }
        if (filteredPosts) {
            return <PostList posts={filteredPosts} />
        } else {

            return <PostList posts={posts} />
        }
    }

    

    render() {
        return (
                <div className="row" >
                    <OptionsSidebar onFilterPosts={this.onFilterPosts} loadData={this.loadData} />
                    {this.renderPosts()}
                    <NewPost />
                </div>
        )
    }
}
