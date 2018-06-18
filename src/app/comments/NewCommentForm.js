import React, { Component } from 'react';
import './NewCommentForm.css';
import { commentService } from '../../services/commentServces';
import { validationService } from '../../services/ValidationService';

export class NewCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            error: null,
            hideClass: "hide",
            disable: "disabled",
        }
    }

    onFormSubmitHandler = e => {
        e.preventDefault();
      }

    onChangeInputHandler = e => {
        this.setState({ 
            inputVal: e.target.value 
        })

        const inputValue = e.target.value;

        if(validationService.isValidText(inputValue)){
            this.setState({
                hideClass: "show",
                disable: "disabled",
                error: validationService.isValidText(inputValue),
            })
        }else {
            this.setState({
                hideClass: "hide",
                disable: null,
                error: validationService.isValidText(inputValue),
            })
        }
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
        const {disable, error, hideClass} = this.state;
        return (
            <div className="form-wrap">
                <form onSubmit={this.onFormSubmitHandler} className="comment-form">
                    <div className="input-field">
                        <input id="email" type="text" value={this.state.inputVal} onChange={this.onChangeInputHandler}  />
                        <label htmlFor="email">Add your comment</label>
                        {error && <p classNAme={`${hideClass}`}>{error.message}</p>}
                    </div>
                </form>
                <div className="submit-btn">
                    <button 
                        className={`btn waves-effect waves-light ${disable}`} type="submit" 
                        name="action"
                        onClick={this.oncClickSubmitBtnHandler}>Submit</button>
                </div>
            </div>
        )
    }
}