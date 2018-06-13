import React, { Component } from 'react';

class FilterForm extends Component {
    render() {
        return (

            <div className="input-field col s6 right">
                <select>
                    <option value="" disabled selected>All posts</option>
                    <option value="1">Videos</option>
                    <option value="2">Images</option>
                    <option value="3">Text</option>
                </select>
            </div>
        );
    }
}

export { FilterForm };