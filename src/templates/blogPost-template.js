import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components'
import Header from '../components/Layout/Header';
import ButtonBack from '../components/Library/ButtonBack'
import Img from 'gatsby-image'
import { TITLE_BLOG, DESCRIPTION_BLOG, H1_BLOG, H2_BLOG, BOLD } from '../styles/BlogStyles';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const FixedDiv = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
`;

const TemplateWrapper = styled.div`
    font-family: 'Noto Serif KR';
    p {
        font-size: 16px;
        line-height: 30px;
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

const BlogFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;

    span {
        font-size: 13px;
    }

    svg {
        width: 10px;
        margin-right: 20px;
        transform: rotate(180deg)
    }

    img {
        flex: 1;
        object-fit: contain;
        transform: scale(0.6)
    }
`;

const BackButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 2;
`;

const Signature = styled.div`
    flex: 7;
    text-align: right;
    font-size: 11px;
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
       }
    },

    renderMark: {
        [MARKS.BOLD]: text => <BOLD>{text}</BOLD>,
    },
}

const blogPostTemplate = ({data}) => {
    const {title, date, description, image, body:{json}} = data.post;

    return (
        <TemplateWrapper>
            <SEO title={title} />
            <FixedDiv>
                <ButtonBack route="/blog" direction="right" rotation="rotate(180deg)"/>
                <Header />
            </FixedDiv>
            <Img style={{height: '400px'}} fluid={image.fluid} />
            <ArticleWrapper>
                <Title>                
                    <TITLE_BLOG>{title}</TITLE_BLOG>
                </Title>
                <DESCRIPTION_BLOG>{description}</DESCRIPTION_BLOG>
                {documentToReactComponents(json, options)}
                <BlogFooter>
                    <Link style={{color: 'black', textDecoration: 'none'}} to="/blog/">
                        <BackButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg><span>BACK TO POSTS</span>
                        </BackButton>
                    </Link>
                    <Signature>
                    Xavier Mod. Licensed under a Creative Commons Attribution 4.0 International License
                    </Signature>
                    <img height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/creativecommons.svg" />
                </BlogFooter>
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
