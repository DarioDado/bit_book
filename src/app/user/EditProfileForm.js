import React, { Component, Fragment } from 'react';
import { userService } from '../../services/userService';
import { validationService } from '../../services/ValidationService';

class EditProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUrl: true,
            nameInputValue: this.props.user.name,
            aboutInputValue: this.props.user.about,
            imgUrlInput: this.props.user.avatarUrl,
            inputNameErr: "",
            inputAboutErr: "",
            inputImgUrlErr: "",
            showNameErr: false,
            showAboutErr: false,
            showImgUrl: false,
            disableBtn: null
        }
    }

    onFormSubmitHandler = e => {
        e.preventDefault();
    }


    onSwitchHandler = () => {
        const switchStatus = this.state.showUrl;
        this.setState({ showUrl: !switchStatus })
    }

    onUrlChange = (event) => {
        const inputValue = event.target.value;
        const err = validationService.isNotValidImage(inputValue)
        if(err){
            this.setState({
                inputImgUrlErr: err.message,
                showImgUrl: true,
                imgUrlInput: inputValue,
                disableBtn: "disabled"
            })
        } else {
            this.setState({
                showImgUrl: false,
                imgUrlInput: inputValue,
                disableBtn: null
            })
        }
    }
    onNameChange = (event) => {
        const inputValue = event.target.value;
        const err = validationService.isNotValidText(inputValue)
        if(err){
            this.setState({
                inputNameErr: err.message,
                showNameErr: true,
                nameInputValue: inputValue,
                disableBtn:"disabled"
            })
        } else {
            this.setState({
                showNameErr: false,
                nameInputValue: inputValue,
                disableBtn: null
            })
        }
    }
    onAboutChange = (event) => {
        const inputValue = event.target.value;
        const err = validationService.isNotValidText(inputValue)
        if(err){
            this.setState({
                inputAboutErr: err.message,
                showAboutErr: true,
                aboutInputValue: inputValue,
                disableBtn: "disabled"
            })
        } else {
            this.setState({
                showAboutErr: false,
                aboutInputValue: inputValue,
                disableBtn: null
            })
        }
    }

   

    onSubmit = (event) => {
        const { onSubmitClick, onCancelClick } = this.props;
        const { nameInputValue, aboutInputValue, imgUrlInput } = this.state;

        onSubmitClick(nameInputValue, aboutInputValue, imgUrlInput);
        onCancelClick(event);
    }


    onChangeInputFile = async (event) => {
        const fileInput = event.target.files[0]
        const imgUrlInput = await userService.uploadImage(fileInput)
        this.setState({ imgUrlInput })
    }

    render() {
        const { user, onCancelClick, } = this.props;
        const { nameInputValue, aboutInputValue, imgUrlInput, inputNameErr, showNameErr, showAboutErr, inputAboutErr, showImgUrl, inputImgUrlErr, disableBtn } = this.state;
        return (
            <Fragment>
                <div className="profile-img-edit">
                    <img src={imgUrlInput} alt="" />
                </div>
                <form className="switch-form" onSubmit={this.onFormSubmitHandler}>
                    <div className="switch">
                        <label>
                            Url
                            <input type="checkbox" onClick={this.onSwitchHandler} />
                            <span className="lever"></span>
                            File upload
                        </label>
                    </div>
                    <input placeholder="Image url" className={`${this.state.showUrl ? "" : "hide"}`} name="imgUrlInput" value={imgUrlInput} id="img-url" type="text" onChange={this.onUrlChange} />
                    <p className={`error-msg ${showImgUrl ? "" : "hide"}`}>{inputImgUrlErr}</p>
                    <input type="file" className={`${this.state.showUrl ? "hide" : ""}`} onChange={this.onChangeInputFile} />
                </form>

                <form className="details-form" onSubmit={this.onFormSubmitHandler}>
                    <input placeholder="Name" id="name" value={nameInputValue} name="nameInputValue" type="text" onChange={this.onNameChange} />
                    <p className={`error-msg ${showNameErr ? "" : "hide"}`}>{inputNameErr}</p>
                    <textarea placeholder="About" id="about" value={aboutInputValue} name="aboutInputValue" className="materialize-textarea" onChange={this.onAboutChange} ></textarea>
                    <p className={`error-msg ${showAboutErr ? "" : "hide"}`}>{inputAboutErr}</p>
                    <button className={`btn waves-effect waves-light submit ${disableBtn}`} type="submit" name="action" onClick={this.onSubmit}>Submit</button>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={onCancelClick}>Cancel</button>
                </form>
            </Fragment>
        );
    }
}

export { EditProfileForm };