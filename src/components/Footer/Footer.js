import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    padding-top: 100px;
    font-size: 11px;
    font-family: 'Noto Serif KR';
`;

const FooterWrapper = styled.div`
    p {
        display: inline-block;
    }

    a {
        flex: 1;
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
                <p>© {n} by Xavier Mod. All rights reserved. <p>Built with <FooterLink>Gatsby.js</FooterLink> and Contentful.</p></p>
            </FooterWrapper>
        </MainWrapper>

    )
}

export default Footer
