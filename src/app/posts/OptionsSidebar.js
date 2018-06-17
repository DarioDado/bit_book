import React from 'react';
import { FilterForm } from './FilterForm';

const OptionsSidebar = (props) => {
    return (
        <div className="col s12 m3 right">
            <FilterForm onFilterPosts={props.onFilterPosts}/>
        </div>
    );
};

export { OptionsSidebar };