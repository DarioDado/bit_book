import React, { Component } from 'react';
import { authService } from '../../services/authService';
import { createHashHistory } from 'history';



export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
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

  onLoginSubmit = () => {
      const { username, password} = this.state;
      const history = createHashHistory();
      const data = {
          username: username,
          password: password
      }
      authService.login(data)
          .then(data => {
              if (data.error) {
                  console.log(data)
                  this.setState({error: data.error.message, showError: true})
              } else {
                  history.push('/feed');
              }
          })
  }


  render() {
    const { login } = this.props;
    const { error, showError } = this.state;

    return (
      <div className={`login-form ${login ? "" : "hide"}`}>
          <form className="col s12" onSubmit={this.onFormSubmitHandler}>
              <div className="row">
                  <div className="input-field col s12">
                      <input
                          name="username"
                          value={this.state.username}
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
                          name="password"
                          value={this.state.password}
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
    )
  }
}
