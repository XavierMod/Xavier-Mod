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
import navBarLinks from '../constants/navbar-links';
import SEO from '../components/SEO';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/NavBar/NavBar';
import socialLinks from '../constants/social-links';
import {WordReveal} from 'react-text-reveal';

const LandingContent = styled.div`
    font-family: 'Noto Serif KR';
    letter-spacing: -0.7px;
    height: 100%;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 50px;
        margin: 70px 0;
        font-weight: 700;
        letter-spacing: -3px;
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

        ${smallerThan.tablet`
            font-size: 25px;
            letter-spacing: -1.5px;
        `};
    }

    a {
        color: #00ffee;
        border-bottom: 1px solid  #00ffee;
        cursor: pointer;
    }

    p {
        font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
    }
`;

const SocialMediaLinks = styled.div`
    display: flex;
    filter: invert();
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 20px 0;

    img {
        height: 100%;
        margin-right: 10px;
        width: 15px;
    }

    a {
        opacity: 1;
        cursor: pointer;
        border-bottom: 0 !important;
    }
`;

const SpanResult = styled.span`
    color: #D88E73;
`;

const SpanConst = styled.span`
    color: #3C9DDB;
`;

const SpanProp = styled.span`
    color: #89DDFF;
`;

const Code = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    ${smallerThan.tablet`
            font-size: 15px;
        `};
`;

const Property = styled.p`
    margin-left: 50px;
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
                    <NavBar />
                    <SEO title="Home" description="Xavier Mod's Landing page." />
                <LandingContent>
                    <div>
                    <h1>I build things. And I love it!</h1>
                        <Code>
                            <div>
                            <p><SpanConst>const </SpanConst><SpanProp>xavierMod </SpanProp>
            = <SpanProp>styled</SpanProp>.<SpanProp>dev</SpanProp>{"`"}</p>
                            <Property><SpanProp>font-family</SpanProp>:<SpanResult> 'Front End Developer'</SpanResult>;</Property>
                            <Property><SpanProp>level</SpanProp>:<SpanResult> junior</SpanResult>;</Property>
                            <Property><SpanProp>position</SpanProp>:<SpanResult> london</SpanResult>;</Property>
                            <Property><SpanProp>university</SpanProp>:<SpanResult> <a>Brunel University</a></SpanResult>;</Property>
                            <Property><SpanProp>grad-year</SpanProp>:<SpanResult> 2021</SpanResult>;</Property>
                            <Property><SpanProp>current-role</SpanProp>:<SpanResult> available-part-time</SpanResult>;</Property>
                            <p>{"`;"}</p>
                            </div>
                        </Code>
                        <SocialMediaLinks>
                        {socialLinks.map((el, ind) => {
                            return <a key={ind} href={el.url} target="_blank"><img height="20" width="20" src={el.icon} /></a>
                        })}
                        </SocialMediaLinks>
                    </div>
                </LandingContent>
            </React.Fragment>
        )
    }
}

export default index

