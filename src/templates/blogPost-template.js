import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components'
import Header from '../components/Layout/Header';
import ButtonBack from '../components/Library/ButtonBack'
import Img from 'gatsby-image'
import { TITLE_BLOG, DESCRIPTION_BLOG, H1_BLOG, H2_BLOG, H3_BLOG, BOLD, UL_LI } from '../styles/BlogStyles';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const FixedDiv = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 70px;
    background-color: #121212;
`;

const ImageWrapper = styled.div`
    padding-top: 90px;
    max-width: 800px;
    margin: auto;
`;

const MB = styled.div`
    position: absolute;
    font-family: 'DM Serif Display' ;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;



const TemplateWrapper = styled.div`
    font-family: 'Noto Serif KR';
    letter-spacing: -0.5px;
    font-size: 20px;

    p {
        font-size: 20px;
        line-height: 35px;
    }

    a {
        color: #34ebd5;
    }
`;

const ArticleWrapper = styled.article`
    max-width: 800px;
    padding: 30px;
    margin: auto;

    img {
        margin: 40px auto;
        display: block;
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }
`; 

const Title = styled.div`
    display: flex;
    align-items: center;
`;

const options = {
    renderNode: {
        "embedded-asset-block":(node) => {
             return <img src={node.data.target.fields.file['en-US'].url }/>
        },
        "heading-1":(node) => {
            return (
            <H1_BLOG>{node.content[0].value}</H1_BLOG>)
       },
        "heading-2":(node) => {
            return (
            <H2_BLOG>{node.content[0].value}</H2_BLOG>)
       },
       "heading-3":(node) => {
        return (
        <H3_BLOG>{node.content[0].value}</H3_BLOG>)
        },
        "unordered-list":(node) => {
            return node.content.map((el, ind, arr) => {
                console.log(el.content[0].content[0].value);
                return (
                    <UL_LI>{el.content[0].content[0].value}</UL_LI>)
            })
        }
    },

    renderMark: {
        [MARKS.BOLD]: text => <BOLD>{text}</BOLD>,
    },
}

const blogPostTemplate = ({data}) => {
    const {title, date, description, image, body:{json}} = data.post;

    console.log('POST', data.post);

    return (
        <TemplateWrapper>
            <SEO title={title} />
            <FixedDiv>
                <ButtonBack route="/blog" direction="right" rotation="rotate(180deg)"/>
                <MB>Mod's blog.</MB>
            </FixedDiv>
            <ImageWrapper>
                <Img style={{height: '400px'}} fluid={image.fluid} />
            </ImageWrapper>
            <ArticleWrapper>
                <Title>                
                    <TITLE_BLOG>{title}</TITLE_BLOG>
                </Title>
                <DESCRIPTION_BLOG>{description}</DESCRIPTION_BLOG>
                {documentToReactComponents(json, options)}
            </ArticleWrapper>
        </TemplateWrapper>
    )
}

export const query = graphql`
query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      date
      body {
        json
      }
    }
  }
  
`;


export default blogPostTemplate
