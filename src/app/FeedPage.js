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
                console.log(posts);
            })
            .catch(e=> {
                console.log(e);
            })
    }

    render() {
        return (
        <div className='container'>
            <PostList />
        </div>
        )
    }
}


