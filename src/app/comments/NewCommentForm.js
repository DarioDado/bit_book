import React, { Component } from 'react';
import './NewCommentForm.css';
import { commentService } from '../../services/commentServces';

export class NewCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            disableBtn: true
        }
    }

    onFormSubmitHandler = e => {
        e.preventDefault();
      }

    onChangeInputHandler = e => {
        const disableBtn = (e.target.value === "") ? true : false
        this.setState({ inputVal: e.target.value, disableBtn })
    }

    oncClickSubmitBtnHandler = () => {
        const {postId, onCreateCommentHandler} = this.props;
        const data = {
            body: this.state.inputVal,
            postId: postId,
            authorId: 746
        }
        commentService.postComment(data)
            .then(status => {
                if (status) {
                    this.setState({inputVal: ""});
                    onCreateCommentHandler();
                }
            });
    }

    render() {
        return (
            <div className="form-wrap">
                <form onSubmit={this.onFormSubmitHandler} className="comment-form">
                    <div className="input-field">
                        <input id="email" type="email" value={this.state.inputVal} onChange={this.onChangeInputHandler}  />
                        <label htmlFor="email">Add your comment</label>
                    </div>
                </form>
                <div className="submit-btn">
                    <button 
                        className="btn waves-effect waves-light" 
                        disabled={this.state.disableBtn} 
                        type="submit" 
                        name="action"
                        onClick={this.oncClickSubmitBtnHandler}>Submit</button>
                </div>
            </div>
        )
    }
}