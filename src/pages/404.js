import React from 'react'
import Layout from '../components/Layout/Layout';
import styled from 'styled-components'

const ErrorWrapper = styled.div`
    display: block;
    max-width: 400px;
    margin: 50px auto;
    text-align: center;
    padding: 60px 0;
`;

const error = () => {
    return (
        <Layout>
            <ErrorWrapper>
                <h1>I'm sorry but there's nothing on this URL (404)</h1>
            </ErrorWrapper>
        </Layout>
    )
}

export default error
