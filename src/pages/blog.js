import React from 'react'
import Layout from '../components/Layout/Layout';
import BlogList from '../components/Blog/BlogList';
import H3 from '../components/Library/Style/H3';
import {useStaticQuery, graphql} from 'gatsby';
import SEO from '../components/SEO';

const Blog = () => {
    const response = useStaticQuery(getPosts);
    const data = response.posts.edges;
    return (
        <Layout>
            <SEO title="Blog" />
            <H3 body="Blog posts" />
            <BlogList data={data} />
        </Layout>
    )
}

const getPosts = graphql`
query {
    posts: allContentfulBlogPost {
      edges {
        node {
          title
          description
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          date
          body {
            body
          }
        }
      }
    }
  }
`;

export default Blog;