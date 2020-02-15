import React from 'react'
import Layout from '../components/Layout/Layout';
import '../index.css';
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
`;

const LandingContent = styled.div`
    margin: 60px 0;

    span {
        color: rgb(67, 52, 235);
    }

    p {
        margin: 20px 0;
    }
`;

const index = () => {
    return (
        <Layout>
            <LandingContent>
                <H1>Hi.</H1>
                <p>I’m Xavier and I design/build UIs and digital products using <span>web technologies</span>.</p>
            </LandingContent>
        </Layout>
    )
}

export default index

