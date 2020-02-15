import React, {useState} from 'react'
import styled from 'styled-components'
import profilePic from '../../images/profilePic.png'
import { Link } from 'gatsby';
import Clap from '../Helpers/Clap';
import socialLinks from '../../constants/social-links';

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
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    ul {
        flex: 9;
    }

    li {
        display: inline-block;
        margin-right: 25px;
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
`;

const SocialMediaLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    img {
        height: 100%;
        margin-right: 10px;
    }

    a {
        opacity: 1;
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

const ProfilePic = styled.img`
    width: 60px;
    height: 60px;
`;

const Title = styled.h1`
    margin-left: 20px;
    font-size: 25px;
    font-weight: 800;
`;

const Description = styled.p`
    opacity: 0.4;
    margin-left: 20px;
`;

const ClapWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: scale(0.9);
`;

const NavBar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    return (
        <NavBarWrapper>
            <Header>
                <ProfilePic src={profilePic} alt='Xavier Mod Profile Pic'/>
                <Title>xavier mod</Title>
                <Description>my <a href="https://mnmlist.com/simplicity-is-the-path/" target="_blank">minimalist</a> front-end dev portfolio</Description>
            </Header>
            <ClapWrapper><Clap /></ClapWrapper>
            <Links>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/'>blog</Link></li>
                    <li><Link to='/'>projects</Link></li>
                    <li><Link to='/'>resources</Link></li>
                </ul>
                <SocialMediaLinks>
                    {socialLinks.map((el, ind) => {
                        console.log(el)
                        return <a href={el.url} target="_blank"><img height="20" width="20" src={el.icon} /></a>
                    })}
                </SocialMediaLinks>
            </Links>
            <hr />
        </NavBarWrapper>
    )
}

export default NavBar
