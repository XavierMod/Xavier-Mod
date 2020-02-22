import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    padding-top: 100px;
    font-size: 11px;
    text-transform: uppercase;
`;

const FooterWrapper = styled.div`
    display: flex;

    p {
        flex: 99%;
    }

    a {
        flex: 1%;
        cursor: pointer;
    }
`;

const FooterLink = styled.span`
    text-decoration: underline;
`;

const Footer = () => {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <MainWrapper>
            <FooterWrapper>
                <p>© {n} by Xavier Mod. All rights reserved.</p>
                <a><img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" /></a>
            </FooterWrapper>
            <p>Built with <FooterLink>Gatsby.js</FooterLink> and Contentful.</p>
        </MainWrapper>

    )
}

export default Footer
