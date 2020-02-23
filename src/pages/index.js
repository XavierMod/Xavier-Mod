import React, {Component} from 'react'
import '../index.css';
import '../styles/animations.css';
import styled from 'styled-components'
import ProfilePic from '../components/Library/ProfilePic';
import XavierModSvg from '../images/XavierMod.svg';
import Cursor from '../components/Helpers/Cursor';
import Clap from '../components/Helpers/Clap';
import {Link} from 'gatsby'
import H3 from '../components/Library/Style/H3';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';

const LandingContent = styled.div`
    overflow: hidden;
    cursor: none;
    height: 100vh;
    display: flex;

    ${smallerThan.tablet`
        display: block;
        height: auto;
    `};
`;

const LeftSection = styled.div`
    flex: 50%;
    position: relative;
`;

const RightSection = styled.div`
    flex: 50%;
    position: relative;
`;

const ClapWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 100px;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const LogoWrapper = styled.div`
    ${smallerThan.tablet`
        display: block;
        margin-bottom: 20px;
    `};
`;

const ProfilePicWrapper = styled.div`
    overflow: hidden;

    div {
        width: 350px;
    }

    animation-name: Width350;
    animation-duration: 1.5s;
    animation-timing-function: ease;

    ${smallerThan.tablet`

        div {
            width: 100%;
            height: 300px;
        }
    `};
`;

const NavBarLanding = styled.div`
    font-size: 20px;
    padding-top: 100px;

    li {
        margin: 5px 0;
    }

    ${smallerThan.tablet`
        padding: 50px 0;
        font-size: 22px;
    `};
`;

const DecorativeBG = styled.div`
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    height: 300px;

    animation-name: WidthFull;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const FooterLanding = styled.div`
    position: fixed;
    bottom: 0;
    padding: 20px;
    font-size: 11px;
    text-transform: uppercase;

    ${smallerThan.tablet`
        position: static;
    `};
`;

const LandingLinks = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 80px;
    text-align: right;
    font-size: 11px;

    ${smallerThan.tablet`
        padding: 10px;
        z-index: 1000px;
    `};
`;

const Info = styled.div`
    display: flex;
    padding-top: 150px;

    animation-name: OpacityLeft;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;

    ${smallerThan.tablet`
        display: block;
        padding: 30px;
    `};
`;

const InfoLeft = styled.div`
    flex: 10%;

    img {
        width: 40px;
    }
`;

const InfoRight = styled.div`
    flex: 90%;
    font-size: 11px;

    a {
        color: black;
    }

    span {
        margin-top: -20px;
    }
`;

class index extends Component {

        state = {
            imagesReveal: {
                blog: 'https://picsum.photos/1920/1080'
            },
            widthReveal: '10%'
        }

        render () {

            return (
                <React.Fragment>
                <ClapWrapper><Clap /></ClapWrapper>
                <Cursor />
                <LandingContent>
                    <LeftSection>
                        <ProfilePicWrapper><ProfilePic /></ProfilePicWrapper>
                        <LandingLinks>
                            <a>GET IN TOUCH</a>
                            <div>
                                <p>LINKEDIN</p>
                                <p>MAIL</p>
                                <p>INSTAGRAM</p>
                            </div>
                        </LandingLinks>
                        <DecorativeBG style={{height: '200px', marginTop: '200px'}} />
                    </LeftSection>
                    <RightSection>
                        <DecorativeBG style={{height: '250px'}} />
                        <Info>
                            <InfoLeft>
                                <LogoWrapper><img src={XavierModSvg} /></LogoWrapper>
                            </InfoLeft>
                            <InfoRight>
                                <H3 body="Xavier Mod"/>
                                <span>(test)Front End Developer | UI Developer / Designer | Creative Technologist</span>
                                <p>2nd year Digital Design at <a href="/" >Brunel University London</a></p>
                                <NavBarLanding>
                                    <ul>
                                        <AniLink 
                                            cover
                                            direction="down"
                                            duration={1}
                                            bg="black" 
                                            to="/blog/" 
                                        ><li>blog</li></AniLink>
                                        <AniLink 
                                            cover
                                            direction="down"
                                            duration={1}
                                            bg="black" 
                                            to="/about/" 
                                        ><li>about</li></AniLink>
                                        <AniLink 
                                            cover
                                            direction="down"
                                            duration={1}
                                            bg="black" 
                                            to="/projects/" 
                                        ><li>projects</li></AniLink>
                                    </ul>
                                </NavBarLanding>
                            </InfoRight>
                        </Info>
                    </RightSection>
                </LandingContent>
                <FooterLanding>© 2020 by Xavier Mod. All rights reserved. Built with Gatsby.js and Contentful.</FooterLanding>
            </React.Fragment>
        )
    }
}

export default index

