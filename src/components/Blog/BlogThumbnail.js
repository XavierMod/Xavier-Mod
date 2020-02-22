import React from 'react'
import styled from 'styled-components';

const MainWrapper = styled.div`
    background: white;
    width: 700px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 100px;
`;

const ImageThumbnail = styled.img`
    object-fit: cover;
    width: 100%;
    height: 250px;
`;

const Info = styled.div`

    h1 {
        text-transform: lowercase;
        font-weight: 500;
    }
`;

const SubHeading = styled.div`
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    opacity: 0.4;
`;

const InfoTime = styled.div`
    font-size: 10px;
    display: inline-block;
`;

const Length = styled.div`
    display: inline-block;
    font-size: 10px;
    text-align: left;
    margin-left: 20px;
`;

const ShortDescription = styled.div`
    font-size: 13px;
    line-height: 1.5;
    opacity: 0.5;
    padding-top: 10px;
`;

const BlogThumbnail = () => {
    return (
        <MainWrapper>
            <ImageThumbnail src="https://picsum.photos/1920/1080"/>
            <Info>
                <SubHeading>
                    <InfoTime> 12/21/2901</InfoTime>
                    <Length>
                        <span>7 MINUTES READ</span>
                    </Length>
                </SubHeading>
                <h1>My favourite light</h1>
                <ShortDescription>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </ShortDescription>
            </Info>
        </MainWrapper>
    )
}

export default BlogThumbnail
