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
        margin: 30px 0;
    `};
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
    background-color: #9826fc;
    height: 35px;
    margin: 10px;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 700;
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
    color: white;

    h1 {
        margin: 20px 0;
        font-size: 15px !important;
        font-weight: 700 !important;
    }

    p {
        line-height: 17px;
        opacity: 0.7;
        margin-bottom: 20px;
        font-family: sans-serif !important;
        font-size: 14px !important;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        border: 1px solid white;
        padding: 15px;
        margin: 5px;
        font-family: 'Noto Serif KR';
        font-size: 14px;
        color: white;
        text-decoration: none;

        &:hover {
            background-color: white;
            color: black;
        }

        &.no-active {
            pointer-events: none;
            cursor: none;
            background-color: grey;
            opacity: 0.5;
            border: 1px solid grey;
        }
    }
`;

const ProjectThumbnail = (props) => {

    const data = useStaticQuery(getDefaultImage);
    const defaultIMG = data.file.childImageSharp.fluid;

    const {title, type, featuredImage, date, indevelopment, featuredProject, description, gitHubLink, liveDemo} = props.project;

    let mainImage = featuredImage === null ? defaultIMG : featuredImage.fluid;

    console.log(props);

    return (
        <MainWrapper>
            <BadgesWrapper>
                {indevelopment ? <NewBadge><span>Coming soon</span></NewBadge> : null}
            </BadgesWrapper>
            <ImgWrapper>
                <Img fluid={mainImage} />
            </ImgWrapper>
            <Info>
                <h1>{title}</h1>
                <p>{description.description}</p>
                <Buttons>
                    <a target="_blank" href={gitHubLink} className={gitHubLink !== null ? "" : "no-active"} >Github</a>
                    <a target="_blank" href={liveDemo} className={liveDemo !== null ? "" : "no-active"}>Live Demo</a>
                </Buttons>
            </Info>
        </MainWrapper>
    )
}

export default ProjectThumbnail
