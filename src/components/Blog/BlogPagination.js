import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    font-family: 'Noto Serif KR';
    font-size: 13px;

    ul {
        text-align: center;
    }

    .list-active {
        background-color: black;
        color: white;
    }
`;

const PageNumber = styled.li`
    display: inline-block;
    border: 1px solid black;
    padding: 0 6px;
    margin-right: 10px; 
    cursor: pointer;
`;

const BlogPagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(currentPage);

    return (
        <MainWrapper>
            <ul>
                {pageNumbers.map(number => {
                    return (
                    <PageNumber 
                        className={number == currentPage ? "list-active" : "list"} 
                        key={number}
                        onClick={() => paginate(number)}>{number}
                    </PageNumber>)
                })}
            </ul>
        </MainWrapper>
    )
}

export default BlogPagination
