import React, { Component } from 'react';
import M from 'materialize-css'

class FilterForm extends Component {
    selectNode = React.createRef();

    componentDidMount() {
        M.FormSelect.init(this.selectNode.current);
    }

    render() {
        return (
                <select ref={this.selectNode}>
                    <option value="" disabled selected>All posts</option>
                    <option value="1">Videos</option>
                    <option value="2">Images</option>
                    <option value="3">Text</option>
                </select>
        );
    }
}

export { FilterForm };