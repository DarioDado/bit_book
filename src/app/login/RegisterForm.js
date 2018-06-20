import React, { Component } from 'react';
import { authService } from '../../services/authService';



export class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      emailErr: "",
      passErr: "",
      err: "",
      showEmailErr: false,
      showPassErr: false,
      showErr: false
    }
  }

  validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  }

  onFormSubmitHandler = e => {
      e.preventDefault();
  }

  onChangeInputHandler = e => {
      this.setState({ [e.target.name]: e.target.value })
      if (e.target.name === "password") {
        if (e.target.value.length < 6 && e.target.value !== "") {
          this.setState({passErr: "Password has to be at least 6 characters long", showPassErr: true})
        } else {
          this.setState({showPassErr: false})
        }
      }
      if (e.target.name === "email") {
        if (!this.validateEmail(e.target.value) && e.target.value !== "") {
          this.setState({emailErr: "Invalid email input", showEmailErr: true})
        } else {
          this.setState({showEmailErr: false});
        }
      }
  }
  
  onRegisterSubmit = () => {
      const {onRegisterHandler} = this.props;
      const { username, password, name, email} = this.state;
      const data = {username, password, name, email}
      authService.register(data)
          .then(data => {
              if (data.error) {
                  console.log(data)
                  this.setState({err: data.error.message, showErr: true})
              } else {
                onRegisterHandler();
              }
          })
  }



  render() {
    const { login } = this.props;
    const { showPassErr, passErr, showEmailErr, emailErr, err, showErr } = this.state;

    return (
      <div className={`register-form ${login ? "hide" : ""}`}>
          <form className="col s12" onSubmit={this.onFormSubmitHandler}>
              <div className="row">
                  <div className="input-field col s12">
                    <input
                        id="register-name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeInputHandler}
                      />
                    <label htmlFor="register-name">Name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input
                          id="register-username"
                          type="text"
                          name="username"
                          value={this.state.username}
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
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangeInputHandler}
                      />
                      <label htmlFor="register-password">Password</label>
                      <p class={`error-msg ${showPassErr ? "" : "hide"}`}>{passErr}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input
                          id="email"
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChangeInputHandler}
                      />
                      <label htmlFor="email">Email</label>
                      <p class={`error-msg ${showEmailErr ? "" : "hide"}`}>{emailErr}</p>
                  </div>
              </div>
              <p class={`error-msg ${showErr ? "" : "hide"}`}>{err}</p>
              <button onClick={this.onRegisterSubmit} className="btn waves-effect waves-light" type="submit" name="action">Register
                  <i className="material-icons right">send</i>
              </button>
          </form>
      </div>
    )
  }
}
