import React, { Component } from 'react';
import './LoginRegisterPage.css';
import { userService } from '../services/userService';

export class LoginRegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loginUsername: "",
            loginPassword: "",
            registerUsername: "",
            registerPassword: "",
            registerEmail: "",
            error: "",
            showError: false
        }
    }

    onFormSubmitHandler = e => {
        e.preventDefault();
    }

    onChangeInputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

    onLoginCardHandler = () => {
        this.setState({ 
            login: true
        });
    }
    onRegisterCardHandler = () => {
        this.setState({
            login: false
        });
    }

    onLoginSubmit = () => {
        const { loginUsername, loginPassword} = this.state;
        const data = {
            username: loginUsername,
            password: loginPassword 
        }
        userService.login(data)
            .then(data => {
                if (data.error) {
                    console.log(data)
                    this.setState({error: data.error.message, showError: true})
                } else {
                    this.props.history.push('/feed');
                }
            })
    }


    render() {
        const { login, error, showError } = this.state;
        return (
            <div className="row">
                <div className="col s12 l6 intro-msg">
                    <h1 className="login-title">BitBook {login ? "Login" : "Register"}</h1>
                    <p className="intro-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="col 12 l6 login-register">
                    <div className="cards">
                        <p className={`login ${login ? "active" : ""}`} onClick={this.onLoginCardHandler}>Login</p>
                        <p className={`register ${login ? "" : "active"}`} onClick={this.onRegisterCardHandler}>Register</p>
                    </div>
                    <div className="form-wrap">
                        <div className={`login-form ${login ? "" : "hide"}`}>
                            <form className="col s12" onSubmit={this.onFormSubmitHandler}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            name="loginUsername"
                                            value={this.state.loginUsername}
                                            onChange={this.onChangeInputHandler} 
                                            id="login-username" 
                                            type="text" 
                                        />
                                        <label htmlFor="login-username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="login-password" 
                                            type="password"
                                            name="loginPassword"
                                            value={this.state.loginPassword}
                                            onChange={this.onChangeInputHandler} 
                                        />
                                        <label htmlFor="login-password">Password</label>
                                    </div>
                                </div>
                                <p class={`error-msg ${showError ? "" : "hide"}`}>{error}</p>
                                <button onClick={this.onLoginSubmit} className="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                        <div className={`register-form ${login ? "hide" : ""}`}>
                            <form className="col s12" onSubmit={this.onFormSubmitHandler}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="register-username" 
                                            type="text" 
                                            name="registerUsername"
                                            value={this.state.registerUsername}
                                            onChange={this.onChangeInputHandler}
                                        />
                                        <label htmlFor="register-username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="register-password" 
                                            type="password" 
                                            name="registerPassword"
                                            value={this.state.registerPassword}
                                            onChange={this.onChangeInputHandler}
                                        />
                                        <label htmlFor="register-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="email" 
                                            type="email" 
                                            name="registerEmail"
                                            value={this.state.registerEmail}
                                            onChange={this.onChangeInputHandler}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}