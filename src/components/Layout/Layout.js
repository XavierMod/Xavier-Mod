import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import ProfilePic from '../Library/ProfilePic'
import {Link} from 'gatsby'
import Cursor from '../Helpers/Cursor';
import Header from './Header';
import ButtonBack from '../Library/ButtonBack'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';
import NavBarMobile from '../../components/NavBar/NavBarMobile';

const LayoutWrapper = styled.div`
    display: flex;
    padding: 60px;
    max-width: 1300px;
    margin: auto;

    ${smallerThan.tablet`
        display: block;
        padding: 20px;
    `};
`;

const LeftContent = styled.div`
    flex: 10%;
    padding-right: 80px;
    width: inherit;

    ${smallerThan.tablet`
        padding: 0;
    `};

    .fixed {
        position: fixed;
        width: 170px;

        ${smallerThan.tablet`
            position: static;
            width: 100%;
            padding: 0;
        `};
    }
`;

const CenterContent = styled.div`
    flex: 70%;
    padding: 0 90px;

    ${smallerThan.tablet`
        padding: 0;
    `};

`;

const RightBackground = styled.div`
    flex: 20%;
    width: 2000px;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");

    ${smallerThan.tablet`
        display: none;
    `};
`;

const QuickUpdates = styled.div`
    display: inline-block;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 30px;
    max-width: 300px;

    ${smallerThan.tablet`
        display: none;
    `};

    h1 {
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
        font-family: 'Noto Serif KR';
    }

    li {
        font-size: 12px;
    }
`;

const ProfileImageWrapper = styled.div`

    ${smallerThan.tablet`
        width: 100px;
        display: flex;
        align-items: top;
        margin: auto;
        padding-bottom: 50px;
    `};
`;

const Layout = (props) => {
    return (
        <>
        <NavBarMobile />
        <ButtonBack route="/" direction="down" rotation="rotate(270deg)"/>
        <Header/>
        <QuickUpdates>
            <h1>Job Status</h1>
            <ul>
                <li>Actively looking for part opportunities and side projects</li>
            </ul>
        </QuickUpdates>
        <LayoutWrapper>
                <LeftContent>
                    <div className="fixed">
                        <Link to="/"><ProfileImageWrapper><ProfilePic /></ProfileImageWrapper></Link>
                        <NavBar />
                    </div>
                </LeftContent>
                <CenterContent>
                {props.children}
                <Footer />
                </CenterContent>
                <RightBackground />
        </LayoutWrapper>
        </>
    )
}

export default Layout
