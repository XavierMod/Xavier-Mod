const path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    
    const { data } = await graphql(`
    query {
        projects:allContentfulProject {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
     
    data.projects.edges.forEach(({node}) => {
        createPage({
            path:`projects/${node.slug}`,
            component:path.resolve('./src/templates/project-template.js'),
            context: {
                slug:node.slug
            }
        });
    })
}