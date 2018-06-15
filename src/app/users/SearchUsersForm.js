import React, { Component } from 'react';

export class SearchUsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
    }

    render() {
        return (
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">search</i>
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Search Users</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}