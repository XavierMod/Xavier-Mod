import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';

const getDefaultImage = graphql`
    query {
        file(relativePath: { eq: "defaultBG.jpg" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
`;

const MainWrapper = styled.div`
    width: 300px;
    margin: 30px;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    transition: all ease 0.2s;
    position: relative;
    z-index: 1;

    ${smallerThan.tablet`
        width: 90%;
    `};

    &:hover ${Info} {
        top: 0;
        transition: all ease 0.4s;
    }
`;

const BadgesWrapper = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

`;

const NewBadge = styled.div`
    background-color: white;
    width: 35px;
    height: 35px;
    margin: 2px;
    border-radius: 400px;
    font-size: 10px;
    font-weight: 700;
    transform: scale(0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin: 0;
        padding: 0;
    }
`;

const ImgWrapper = styled.div`
    position: relative;

    div {
        height: 300px;
    }

    ${smallerThan.tablet`
        div {
            height: 300px;
        }
    `};
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    background: black;
    opacity: 0;
    z-index: 100;
    transition: all ease 0.4s;
    color: white;
    font-family: 'Noto Serif KR';
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }

    p {
        font-weight: 800;
        font-size: 11px;
    }

    span {
        font-size: 10px;
        font-weight: 700;
        opacity: 0.5;
        right: 0;
    }
`;

const ProjectThumbnail = (props) => {

    const data = useStaticQuery(getDefaultImage);
    const defaultIMG = data.file.childImageSharp.fluid;

    const {title, type, featuredImage, date, indevelopment, featuredProject} = props.project;

    let mainImage = featuredImage === null ? defaultIMG : featuredImage.fluid;

    console.log(featuredImage);

    return (
        <MainWrapper>
            <BadgesWrapper>
                {featuredProject ? <NewBadge><span>⭐</span></NewBadge> : null}
                {indevelopment ? <NewBadge><span>🚧</span></NewBadge> : null}
            </BadgesWrapper>
            <ImgWrapper>
                <Info>
                    <p>{title}</p>
                </Info>
                <Img fluid={mainImage} />
            </ImgWrapper>
        </MainWrapper>
    )
}

export default ProjectThumbnail
