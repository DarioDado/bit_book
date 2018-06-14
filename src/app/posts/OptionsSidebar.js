import React, { Fragment } from 'react';
import { FilterForm } from './FilterForm';
import NewPostButton from './newPost/NewPostButton';

const OptionsSidebar = () => {
    return (
        <Fragment>
            <FilterForm />
            <NewPostButton />
        </Fragment>
    );
};

export { OptionsSidebar };