import React, { Fragment, Component } from 'react';
import { createHashHistory } from 'history';
import { userService } from '../../../services/userService';
import { postService } from '../../../services/postService';


export class DeletePostButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loggedInUser: null,
            loading: true
        }
    }

    componentDidMount = async () => {
        const user = await userService.getMyProfile()
        this.setState({user, loading: false})
    }

    onDeleteBtnHandler = () => {
        this.setState({showModal: true});
        document.querySelector("body").classList.add("scroll-off");
    }

    onCancelBtnHandler = () => {
        this.setState({showModal: false});
        document.querySelector("body").classList.remove("scroll-off");
    }

    onConfirmDeleteBtnHandler = async () => {
        const history = createHashHistory();
        const {post} = this.props;
        await postService.deletePost(post.id)
        history.push('/feed');
        document.querySelector("body").classList.remove("scroll-off");
    }

    renderDeleteButton = () => {
        const {user} = this.state;
        const {post} = this.props;
        if (user.userId === post.userId) {
            return (
                <button 
                    onClick={this.onDeleteBtnHandler} 
                    className="btn waves-effect waves-light red darken-3" 
                    type="submit" 
                    name="action">
                        Delete Post
                        <i className="material-icons right">delete</i>
                </button>
            )
        }
        return null;
    }

    render() {
        const {showModal, loading, user} = this.state;
        if (loading) {
            return <p></p>
        }
        return (
            <Fragment>
            {this.renderDeleteButton()}
            <div className={`delete-modal ${showModal ? "" : "hide"}`}>
                <div className="delete-modal-body">
                    <p className="delete-msg">Are you sure?</p>
                    <button onClick={this.onConfirmDeleteBtnHandler} className="btn waves-effect waves-light red darken-3" type="submit" name="action">Delete
                    </button>
                    <button onClick={this.onCancelBtnHandler} className="btn waves-effect waves-light" type="submit" name="action">Cancel
                    </button>
                </div>
            </div>
            </Fragment>
        )

    }
}