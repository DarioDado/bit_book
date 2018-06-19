import React, { Component } from 'react';
import M from 'materialize-css'

class FilterForm extends Component {
    constructor(props) {
        super(props)
    }

    selectNode = React.createRef();


    componentDidMount() {
        M.FormSelect.init(this.selectNode.current);
    }

    render() {
        const { onFilterPosts } = this.props;
        return (
            <select ref={this.selectNode} onChange={onFilterPosts}>
                <option value="all">All posts</option>
                <option value="video">Videos</option>
                <option value="image">Images</option>
                <option value="text">Text</option>
            </select>
        );
    }
}

export { FilterForm };