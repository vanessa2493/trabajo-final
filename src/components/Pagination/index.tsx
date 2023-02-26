import React, {FC} from 'react';
import { Pagination } from 'react-bootstrap';

type Props = {
    currentPage: number,
    totalPages: number ,
    onChangePage: (pageNumber: number) => void
}

const CustomPagination: FC<Props> = ({ currentPage, totalPages, onChangePage}) => {

    const handlePageClick = (event: React.MouseEvent<HTMLElement>, pageNumber: number) => {
        event.preventDefault();
        onChangePage(pageNumber as number);
    }

    const renderPaginationItems = () => {
        const paginationItems = [];

        // Always show the first page
        paginationItems.push(
            <Pagination.Item key="page-1" active={currentPage === 1} onClick={(e) => handlePageClick(e, 1)}>
                {1}
            </Pagination.Item>
        );

        // Show "..." separator if there are more than 2 pages
        if (totalPages > 2) {
            paginationItems.push(<Pagination.Ellipsis key="ellipsis-1" />);
        }

        // Show the current page and its neighbors
        for (let i = Math.max(2, currentPage - 2); i <= Math.min(currentPage + 2, totalPages - 1); i++) {
            paginationItems.push(
                <Pagination.Item key={`page-${i}`} active={currentPage === i} onClick={(e) => handlePageClick(e, i)}>
                    {i}
                </Pagination.Item>
            );
        }

        // Show "..." separator if there are more than 2 pages
        if (totalPages > 2) {
            paginationItems.push(<Pagination.Ellipsis key="ellipsis-2" />);
        }

        // Always show the last page
        if (totalPages > 1) {
            paginationItems.push(
                <Pagination.Item key={`page-${totalPages}`} active={currentPage === totalPages} onClick={(e) => handlePageClick(e, totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return paginationItems;
    }

    return (
        <Pagination>
            {renderPaginationItems()}
        </Pagination>
    );
}

export { CustomPagination };
