const path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    
    const { data } = await graphql(`
    query {
        posts: allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      
        projects: allContentfulProject {
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
    });

    data.posts.edges.forEach(({node}) => {
        createPage({
            path:`blog/${node.slug}`,
            component:path.resolve('./src/templates/blogPost-template.js'),
            context: {
                slug:node.slug
            }
        });
    })
}