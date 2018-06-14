import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom'
import { NewTextPost } from './NewTextPost';
import { NewImagePost } from './NewImagePost';
import { NewVideoPost } from './NewVideoPost';

class NewPost extends Component {


    render() {
        return (
            <Fragment>
                <Route path="/posts/new/text" component={NewTextPost} />
                <Route path="/posts/new/image" component={NewImagePost} />
                <Route path="/posts/new/video" component={NewVideoPost} />
            </Fragment>
        );
    }
}

export { NewPost };