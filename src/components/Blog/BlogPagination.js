import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    display: flex;
    font-family: 'Noto Serif KR';
    font-size: 13px;
`;

const Next = styled.span`
    flex: 5%;
`;

const Previous = styled.span`
    flex: 5%;
`;

const CurrentPage = styled.span`
    flex: 45%;
    display: flex;
    border-right: 1px solid black;
    margin-right: 10px;
    padding-right: 10px;
    justify-content: flex-end;
`;

const TotalPages = styled.span`
    flex: 45%;
    border-left: 1px solid black;
    margin-left: 10px;
    padding-left: 10px;
`;

const BlogPagination = () => {
    return (
        <MainWrapper>
            <Next>previous</Next>
            <CurrentPage>0</CurrentPage>
            <TotalPages>4</TotalPages>
            <Previous>next</Previous>
        </MainWrapper>
    )
}

export default BlogPagination
