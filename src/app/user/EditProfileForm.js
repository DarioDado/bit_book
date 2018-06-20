import React, { Component, Fragment } from 'react';
import { userService } from '../../services/userService';

class EditProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUrl: true,
            nameInputValue: this.props.user.name,
            aboutInputValue: this.props.user.about,
            imgUrlInput: this.props.user.avatarUrl,
        }
    }

    onFormSubmitHandler = e => {
        e.preventDefault();
    }


    onSwitchHandler = () => {
        const switchStatus = this.state.showUrl;
        this.setState({ showUrl: !switchStatus })
    }

    onInputChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    onSubmit = (event) => {
        const { onSubmitClick, onCancelClick } = this.props;
        const { nameInputValue, aboutInputValue, imgUrlInput } = this.state;

        onSubmitClick(nameInputValue, aboutInputValue, imgUrlInput);
        onCancelClick(event);
    }


    onChangeInputFile = (event) => {
        const fileInput = event.target.files[0]
        userService.uploadImage(fileInput)
            .then(imgUrlInput => {
                this.setState({
                    imgUrlInput
                })
            })
    }

    render() {
        const { user, onCancelClick, } = this.props;
        const { nameInputValue, aboutInputValue, imgUrlInput } = this.state;
        return (
            <Fragment>
                <div className="profile-img">
                    <img src={imgUrlInput} alt="" />
                </div>
                <form className="switch-form" onSubmit={this.onFormSubmitHandler}>
                    <div className="switch">
                        <label>
                            Url
                            <input type="checkbox" onClick={this.onSwitchHandler} />
                            <span class="lever"></span>
                            File upload
                        </label>
                    </div>
                    <input placeholder="Image url" className={`${this.state.showUrl ? "" : "hide"}`} name="imgUrlInput" value={imgUrlInput} id="img-url" type="text" onChange={this.onInputChange} />
                    <input type="file" className={`${this.state.showUrl ? "hide" : ""}`} onChange={this.onChangeInputFile}/>
                </form>

                <form className="details-form" onSubmit={this.onFormSubmitHandler}>
                    <input placeholder="Name" id="first_name" value={nameInputValue} name="nameInputValue" type="text" onChange={this.onInputChange} />
                    <textarea placeholder="About" id="about" value={aboutInputValue} name="aboutInputValue" class="materialize-textarea" onChange={this.onInputChange}></textarea>
                    <button class="btn waves-effect waves-light submit" type="submit" name="action" onClick={this.onSubmit}>Submit</button>
                    <button class="btn waves-effect waves-light" type="submit" name="action" onClick={onCancelClick}>Cancel</button>
                </form>
            </Fragment>
        );
    }
}

export { EditProfileForm };