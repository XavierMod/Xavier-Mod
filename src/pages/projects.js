import React, {Component} from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components';
import H3 from '../components/Library/Style/H3';
import {useStaticQuery, graphql} from 'gatsby';
import ProjectList from '../components/Projects/ProjectList';
import SEO from '../components/SEO';

const Projects = () => {
    const response = useStaticQuery(getProjects);

    return (
        <Layout>
            <SEO title="Projects" />
            <ProjectList projects={response.projects.edges} />
        </Layout>
    )
}

const getProjects = graphql`
    query {
        projects:allContentfulProject {
        edges {
            node {
            title
            type
            client
            indevelopment
            featuredProject
            date
            slug
            featuredImage {
                fluid {
                ...GatsbyContentfulFluid
                }
            }
            images {
                fluid {
                ...GatsbyContentfulFluid
                }
            }
            }
        }
        }
    }
`;

export default Projects;