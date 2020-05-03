import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    padding-top: 100px;
    font-size: 11px;
    font-family: 'Noto Serif KR';
`;

const Images = styled.div`
    flex: 1%;
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const FooterWrapper = styled.div`
    padding: 10px;
    background: #212121;
    font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        flex: 99%;
    }

    a {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        filter: invert();
        width: 15px;
        padding: 3px;
    }
`;

const Footer = () => {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <MainWrapper>
            <FooterWrapper>
                <p>© {n}. Xavier Mod.</p>
                <a href="#" target="_blank">
                <Images>
                    <a href="https://www.gatsbyjs.org/" target="_blank"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/gatsby.svg" /></a>
                    <a href="https://www.netlify.com/" target="_blank"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/netlify.svg" /></a>
                    <a href="https://github.com/XavierMod/Xavier-Mod" target="_blank"><img style={{marginLeft: '10px'}} height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" /></a>
                </Images>
                </a>
            </FooterWrapper>
        </MainWrapper>

    )
}

export default Footer
