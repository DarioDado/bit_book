import React, { Component } from 'react';
import './LoginRegisterPage.css';
import { LoginForm } from './login/LoginForm';
import { RegisterForm } from './login/RegisterForm';


export class LoginRegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            registrationComplete: false
        }
    }

    onRegisterHandler = () => {
      this.setState({login: true, registrationComplete: true})
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




    render() {
        const { login, error, showLoginError, showPasswordError, showEmailError, registrationComplete } = this.state;
        return (
            <div className="row">
                <div className="col s12 l6 intro-msg">
                    <h1 className="login-title">BitBook {login ? "Login" : "Register"}</h1>
                    <p className="intro-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="col 12 l6 login-register">
                    <p className={`registration-complete-msg ${registrationComplete ? "" : "hide"}`}>Registration successfully completed! Please Login</p>
                    <div className="cards">
                        <p className={`login ${login ? "active" : ""}`} onClick={this.onLoginCardHandler}>Login</p>
                        <p className={`register ${login ? "" : "active"}`} onClick={this.onRegisterCardHandler}>Register</p>
                    </div>
                    <div className="form-wrap">
                      <LoginForm login={this.state.login} />
                      <RegisterForm login={this.state.login} onRegisterHandler={this.onRegisterHandler} />
                    </div>
                </div>
            </div>
        )
    }
}
