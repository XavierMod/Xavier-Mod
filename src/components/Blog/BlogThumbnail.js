import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {Link} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';

const MainWrapper = styled.div`
    max-width: 600px;
    margin: auto;
    position: relative;
    cursor: pointer;
    margin-bottom: 100px;
    padding: 30px;

    a {
        text-decoration: none;
        color: white;
    }

    p {
        font-family: 'Noto Serif KR';
    }

    ${smallerThan.tablet`
        margin: 60px auto;
    `};
`;

const Info = styled.div`
    h1 {
        font-weight: 500;
        display: block;
        font-size: 50px;
        margin: 20px 0;
        font-family: 'DM Serif Display';
        line-height: 70px;

        ${smallerThan.tablet`
            font-size: 20px;
            line-height: 30px;
        `};
    }
`;

const SubHeading = styled.div`
    margin: 5px 0;
    opacity: 0.4;
`;

const InfoTime = styled.div`
    font-size: 20px;
    display: inline-block;

    ${smallerThan.tablet`
         font-size: 13px;
    `};
`;

const ShortDescription = styled.div`
    font-size: 20px;
    line-height: 1.5;
    opacity: 0.5;
    padding-top: 10px;

    ${smallerThan.tablet`
         font-size: 13px;
    `};
`;

const BlogThumbnail = (props) => {
    const { title, slug, description, date, image:{fluid} } = props.post;
    return (
        <MainWrapper>
            <Link to={"/blog/" + slug}>
                <Info>
                    <SubHeading>
                        <InfoTime>{date}</InfoTime>
                    </SubHeading>
                    <h1>Lorem ipsum durare seda seas itun mundo</h1>
                    <ShortDescription>
                        <p>{description}</p>
                    </ShortDescription>
                </Info>
            </Link>
        </MainWrapper>
    )
}

export default BlogThumbnail
