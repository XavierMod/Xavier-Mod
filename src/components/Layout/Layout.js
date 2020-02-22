import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import ProfilePic from '../Library/ProfilePic'
import {Link} from 'gatsby'
import Cursor from '../Helpers/Cursor';
import Header from './Header';
import ButtonBack from '../Library/ButtonBack'

const LayoutWrapper = styled.div`
    display: flex;
    padding: 60px;
    max-width: 1100px;
    margin: auto;
`;

const LeftContent = styled.div`
    flex: 10%;
    padding-right: 80px;
    width: inherit;

    .fixed {
        position: fixed;
        width: 170px;
    }
`;

const CenterContent = styled.div`
    flex: 70%;
    padding: 0 50px;

`;

const RightBackground = styled.div`
    flex: 20%;
    width: 2000px;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
`;

const QuickUpdates = styled.div`
    display: inline-block;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 30px;
    max-width: 200px;

    h1 {
        display: inline-block;
        border: 2px solid black;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 700;
        padding: 0 10px;
        margin-bottom: 10px;
    }

    li {
        font-size: 12px;
    }
`;

const Layout = (props) => {
    return (
        <>
        <ButtonBack route="/" direction="down" rotation="rotate(270deg)"/>
        <Header/>
        <QuickUpdates>
            <h1>Quick News:</h1>
            <ul>
                <li>Actively looking for part opportunities and side projects</li>
            </ul>
        </QuickUpdates>
        <LayoutWrapper>
                <LeftContent>
                    <div className="fixed">
                        <Link to="/"><ProfilePic /></Link>
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
