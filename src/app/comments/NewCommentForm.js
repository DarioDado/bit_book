import React, { Component } from 'react';
import './NewCommentForm.css';

export class NewCommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
    }

    onChangeInputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="form-wrap">
                <form className="comment-form">
                    <div className="input-field">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Add your comment</label>
                        <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </form>
                <div className="submit-btn">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </div>
        )
    }
}