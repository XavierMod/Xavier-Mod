import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

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

const Info = styled.div`
text-transform: uppercase;
z-index: -1;
transition: all ease 0.4s;
color: black;
text-align: left;


p {
    font-weight: 800;
    display: inline-block;
    font-size: 11px;
}

span {
    display: block;
    font-size: 10px;
    font-weight: 700;
    opacity: 0.5;
    right: 0;
}
`;

const MainWrapper = styled.div`
    width: 300px;
    margin: 20px 0;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    transition: all ease 0.2s;
    position: relative;

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
    border: 0.5px solid #bababa;
`;

const BackgroundImg = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 100%;
    height: 100%;
    z-index: -1;
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
                <Img style={{height: '200px'}} fluid={mainImage} />
                <BackgroundImg />
            </ImgWrapper>
            <Info>
                <p>## {title}</p>
                <span>{type}</span>
            </Info>
        </MainWrapper>
    )
}

export default ProjectThumbnail
