import React from 'react';
import { PaginationItem } from './PaginationItem';

const Pagination = (props) => {

    const calculateNumberOfPages = () => {
        const { postsCount } = props;
        const numOfPages = Math.ceil(postsCount / 10);
        const pages = [];

        for (let i = 1; i <= numOfPages; i++) {
            pages.push(i);
        }
        return pages
    }


    const renderItem = () => {
        const pages = calculateNumberOfPages();
        return pages.map((page, index) => {
            return <PaginationItem page={page} loadPaginationData={props.loadPaginationData} key={index} i={index + 1} active={props.active} pageNum={props.pageNum} />
        });
    }

    return (
        <div className="row">
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                {renderItem()}
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    )
};

export { Pagination };