import React from 'react';
import { Link } from 'react-router-dom';

const PaginationItem = (props) => {

    const setClass = () => {
        const { pageNum, i} = props;
        if (pageNum === i) {
            return "active"
        } else {
            return null
        }
    }

    return (
        <li onClick={props.loadPaginationData} className={setClass()}><Link to={`/feed/${props.page}`} id={`${props.page}`}>{props.page}</Link></li>
    );
};

export { PaginationItem };