import React from 'react'
import Layout from '../components/Layout/Layout';
import BlogList from '../components/Blog/BlogList';
import H3 from '../components/Library/Style/H3';

const blog = () => {
    return (
        <Layout>
            <H3 body="Blog posts" />
            <BlogList />
        </Layout>
    )
}

export default blog
