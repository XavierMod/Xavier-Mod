import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import Tag from './Tag';


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
    background-color: ${props => props.background};
    color: ${props => props.color};
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
        margin-bottom: 0;
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
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: white;
            color: black;

            img {
                filter: none;

            }
        }

        &.no-active {
            pointer-events: none;
            cursor: none;
            background-color: grey;
            opacity: 0.5;
            border: 1px solid grey;
        }
    }

    img {
        width: 25px;
        filter: invert();
    }
`;

const ProjectThumbnail = (props) => {

    const data = useStaticQuery(getDefaultImage);
    const defaultIMG = data.file.childImageSharp.fluid;

    const {title, type, featuredImage, date, indevelopment, agedWarning, featuredProject, description, gitHubLink, liveDemo} = props.project;

    let mainImage = featuredImage === null ? defaultIMG : featuredImage.fluid;

    console.log('THUM', props);

    return (
        <MainWrapper>
            <BadgesWrapper>
                {indevelopment ? <NewBadge background="#9826fc" color="white"><span>In development</span></NewBadge> : null}
                {agedWarning ? <NewBadge background="#666699" color="white"><span>⚠️Old project</span></NewBadge> : null}
            </BadgesWrapper>
            <ImgWrapper>
                <Img style={{height: '300px'}} fluid={mainImage} />
            </ImgWrapper>
            <Info>
                <h1>{title}</h1>
                <Tag tagName={props.project.tags} />
                <p>{description.description}</p>
                <Buttons>
                    <a target="_blank" href={gitHubLink} className={gitHubLink !== null ? "" : "no-active"} ><img src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" alt="Facebook" /></a>
                    <a target="_blank" href={liveDemo} className={liveDemo !== null ? "" : "no-active"}>Live Demo</a>
                </Buttons>
            </Info>
        </MainWrapper>
    )
}

export default ProjectThumbnail
