import React from 'react'
import {graphql} from 'gatsby'
import Header from '../components/Layout/Header';
import styled from 'styled-components'
import Img from 'gatsby-image';
import H3 from '../components/Library/Style/H3'
import Footer from '../components/Footer/Footer'
import ButtonBack from '../components/Library/ButtonBack'
import SEO from '../components/SEO';

const Background = styled.div`
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    height: 50px;
`;

const MainWrapper = styled.div`
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;

    h1 {
        padding-top: 30px;
    }

    p {
        font-size: 13px;
    }
`;

const Description = styled.div`
`;

const InfoGrid = styled.div`
    display: flex;
    margin: 30px 0;
`;

const InfoGridModule = styled.div`
    flex: 33%;
    padding-right: 20px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    img {
        padding: 20px;
    }
`;

const ButtonLink = styled.a`
        padding: 25px;
        background: black;
        color: white;
        font-size: 11px;
        cursor: pointer;
`;

const ImagesWrapper = styled.div`

    div {
        margin: 40px 0;
        height: 500px;
        border: 0.5px solid #bababa;
    }
`;

const WarningMessage = styled.div`
    border: 1px solid black;
    padding: 20px;
    text-align: center;
`;


const projectTemplate = ({data}) => {

    const {
        title, 
        description:{description}, 
        type, 
        client, 
        date, 
        liveDemo,
        gitHubLink,
        indevelopment,
        agedWarning,
        featuredImage, 
        featuredProject, 
        images} = data.project;

    console.log(images);

    return (
        <React.Fragment>  
            <SEO title={title} />
            <ButtonBack route="/projects" direction="right" rotation="rotate(180deg)"/>
            <Header />
            <MainWrapper>
                {indevelopment ? <WarningMessage><p>🚧 This project is being currently developed. Accessing a live demo will show you an early version of the final product 🚧</p></WarningMessage> : null}
                {agedWarning ? <WarningMessage><p>⚠️ This project is a bit out of date. That means that my coding skills have gone a bit better and now I use other frameworks, etc.</p></WarningMessage> : null}
                <H3 body={title} />
                <Img style={{border: '0.5px solid #bababa', height: '400px'}} fluid={featuredImage.fluid} />
                <ButtonsWrapper>
                    {liveDemo !== null ? <ButtonLink href={liveDemo} target="__blank"> ## live demo </ButtonLink> : null}
                    {gitHubLink !== null ? <a href={gitHubLink} target="__blank" ><img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" /></a> : null}
                </ButtonsWrapper>
                <Description>
                    <H3 body={"Description"} />
                    <p>{description}</p>
                </Description>
                <InfoGrid>
                    <InfoGridModule>
                        <H3 body={"type"} />
                        <p>{type}</p>
                    </InfoGridModule>
                    <InfoGridModule>
                        <H3 body={"client"} />
                        <p>{client}</p>
                    </InfoGridModule>
                    <InfoGridModule>
                        <H3 body={"date"} />
                        <p>{date}</p>
                    </InfoGridModule>
                </InfoGrid>
                <Background />
                <ImagesWrapper>
                    {images.map((el, ind) => {
                        return <Img key={ind} fluid={el.fluid} />
                    })}
                </ImagesWrapper>
                <Footer />
            </MainWrapper>
        </React.Fragment>
    )
}

export const query = graphql`
    query($slug: String!) {
        project:contentfulProject(slug: { eq: $slug }) {
        title
        description {
            description
        }
        type
        client
        liveDemo
        indevelopment
        gitHubLink
        agedWarning
        body {
            body
        }
        date
        featuredImage {
            fluid {
            ...GatsbyContentfulFluid
            }
        }
        featuredProject
        images {
            fluid {
            ...GatsbyContentfulFluid
            }
        }
        }
    }
`;

export default projectTemplate;