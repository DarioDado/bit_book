import React, { Component } from 'react';

class FilterForm extends Component {
    render() {
        return (
                <select>
                    <option value="" disabled selected>All posts</option>
                    <option value="1">Videos</option>
                    <option value="2">Images</option>
                    <option value="3">Text</option>
                </select>
        );
    }
}

export { FilterForm };