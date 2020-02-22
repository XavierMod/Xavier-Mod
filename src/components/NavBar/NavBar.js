import React, {useState} from 'react'
import styled from 'styled-components'
import Clap from '../Helpers/Clap';
import socialLinks from '../../constants/social-links';
import ProfilePic from '../Library/ProfilePic';
import {Link} from 'gatsby';
import XavierModSvg from '../../images/XavierMod.svg';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavBarWrapper = styled.nav`
    margin-top: 40px;
    position: relative;
    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
        opacity: 0.5;
        transition: all ease .3s;

        &:hover {
            opacity: 1;
        }
    }

    span {
        font-family: 'Kavivanar', cursive !important; 
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    ul {
        flex: 9;
    }

    li {
        display: block;
        margin-right: 25px;
        text-decoration: none;
        color: black;
        font-size: 15px;
    }
`;

const SocialMediaLinks = styled.div`
    flex: 1;
    display: flex;

    img {
        height: 100%;
        margin-right: 10px;
    }

    a {
        opacity: 1;
        cursor: pointer;
    }
`;

const NavBar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    return (
        <NavBarWrapper>
            <img style={{ width: '50px' }} src={XavierModSvg} />
            <Links>
                <ul>
                    <li><AniLink
                        cover
                        to="/"
                        direction="up"
                        duration={1}
                        bg="black" 
                        >home</AniLink></li>
                    <li><Link to='/about/'>about</Link></li>
                    <li><Link to='/blog/'>blog</Link></li>
                    <li><Link to='/projects/'>projects</Link></li>
                    <li><Link to='/resources/'>resources</Link></li>
                </ul>
            </Links>
            <hr />
            <SocialMediaLinks>
                    {socialLinks.map((el, ind) => {
                        return <a key={ind} href={el.url} target="_blank"><img height="20" width="20" src={el.icon} /></a>
                    })}
            </SocialMediaLinks>
        </NavBarWrapper>
    )
}

export default NavBar
