import React, { Component, Fragment } from 'react';
import { postService } from '../../../services/postService';
class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputValue: "",
            imageInputValue: "",
            videoInputValue: ""
        }
    }
    renderNewPostBtn() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><button data-target="modal1" className="btn modal-trigger btn-floating  blue"><i className="material-icons">text_format</i> Post</button></li>
                    <li><button data-target="modal2" className="btn modal-trigger btn-floating  green"><i className="material-icons">image</i>Image</button></li>
                    <li><button data-target="modal3" className="btn modal-trigger btn-floating  red"><i className="material-icons">ondemand_video</i>Video</button></li>
                </ul>
            </div>
        )
    }

    renderNewTextPost() {
        return (

            <div id="modal1" className="modal">
                <form>
                    <div className="modal-content">
                        <div className="input-field col s12">
                            <h3>New text post</h3>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="icon_prefix">Text post</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="icon_prefix" name="textInputValue" type="text" className="validate" value={this.state.textInputValue} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="waves-effect waves-light btn right" onClick={this.onTextPostSubmit}>Post</button>
                    </div>
                </form>

            </div>
        )
    }

    renderNewImagePost() {
        return (
            <form>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <div className="input-field col s12">
                            <h3>New image post</h3>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="icon_prefix">Image url</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="icon_prefix" name="imageInputValue" type="text" className="validate" value={this.state.imageInputValue} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="waves-effect waves-light btn right" onClick={this.onPostSubmit}>Post</button>
                    </div>

                </div>
            </form>
        );
    }

    renderNewVideoPost() {
        return (
            <form>
                <div id="modal3" className="modal">
                    <div className="modal-content">
                        <div className="input-field col s12">
                            <h3>New video post</h3>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="icon_prefix">Video url</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="icon_prefix" name="videoInputValue" type="text" className="validate" value={this.state.videoInputValue} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="waves-effect waves-light btn right" onClick={this.onPostSubmit} >Post</button>
                    </div>

                </div>
            </form>
        );
    }

    onChange = (event) => {
        const inputValue = event.target.name;
        this.setState({
            [inputValue]: event.target.value
        })
    }

    onTextPostSubmit = (event) => {
        event.preventDefault();
        const {textInputValue} = this.state;

    }



    render() {
        return (
            <Fragment>
                {this.renderNewTextPost()}
                {this.renderNewImagePost()}
                {this.renderNewVideoPost()}
                {this.renderNewPostBtn()}
            </Fragment>
        );
    }
}

export { NewPost };