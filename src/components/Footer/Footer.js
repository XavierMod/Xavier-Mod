import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    padding-top: 100px;
    display: flex;

    p {
        flex: 99%;
    }

    a {
        flex: 1%;
        cursor: pointer;
    }
`;

const Footer = () => {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <FooterWrapper>
            <p>© {n} by Xavier Mod. All rights reserved. Built with Gatsby.js and Contentful.</p>
            <a><img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" /></a>
        </FooterWrapper>
    )
}

export default Footer
