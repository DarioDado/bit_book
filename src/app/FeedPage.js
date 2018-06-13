import React, { Component } from 'react';
import './FeedPage.css';
import {PostList} from './posts/PostList';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='container'>
            <PostList />
        </div>
        )
    }
}


