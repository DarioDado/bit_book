import React from 'react';
import { Link } from 'react-router-dom';

const PaginationItem = (props) => {

    return (
        <li onClick={props.loadPaginationData}><Link to={`/feed/${props.page}`} id={`${props.page}`}>{props.page}</Link></li>
    );
};

export { PaginationItem };