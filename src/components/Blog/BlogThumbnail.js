import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {Link} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';

const MainWrapper = styled.div`
    background: white;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 100px;
    z-index: 100;

    a {
        text-decoration: none;
        color: black;
    }

    p {
        font-family: 'Noto Serif KR';
    }

    ${smallerThan.tablet`
        width: 100%;
        margin: 60px auto;
    `};
`;

const ImageThumbnail = styled.div`
    border: 0.5px solid grey;
`;

const Info = styled.div`
    h1 {
        font-weight: 500;
        font-size: 22px;
        font-family: 'DM Serif Display';
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

const BlogThumbnail = (props) => {
    const { title, slug, description, date, image:{fluid} } = props.post;
    return (
        <MainWrapper>
            <Link to={"/blog/" + slug}>
                <ImageThumbnail><Img style={{height: '290px', filter: 'grayscale(100%)'}} fluid={fluid}/></ImageThumbnail>
                <Info>
                    <SubHeading>
                        <InfoTime>{date}</InfoTime>
                    </SubHeading>
                    <h1>{title}</h1>
                    <ShortDescription>
                        <p>{description}</p>
                    </ShortDescription>
                </Info>
            </Link>
        </MainWrapper>
    )
}

export default BlogThumbnail
