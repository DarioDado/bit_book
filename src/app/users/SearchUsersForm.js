import React, { Component } from 'react';

export class SearchUsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
    }

    onChangeInputHandler = e => {
      const { onKeyChangeHandler } = this.props;
      this.setState({ inputVal: e.target.value })
      onKeyChangeHandler(e.target.value);
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <textarea
                              id="icon_prefix2"
                              value={this.state.inputVal}
                              onChange={this.onChangeInputHandler}
                              className="materialize-textarea">
                            </textarea>
                            <label htmlFor="icon_prefix2">Search Users</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
