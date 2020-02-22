import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';

const SVG = styled.svg`
    transform: ${props => props.rotation};
    fill: black;
`;

const Back = styled.div`
    position: fixed;
    padding: 10px;
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 3px solid black;
    transition: all ease 0.2s;
    z-index: 1000;
    
    ${smallerThan.tablet`
        margin: 20px;
        position: absolute;
        top: 0;
    `};

&:hover {
    background-color: black;

    ${SVG} {
        fill: white;
    }
}
`;

class ButtonBack extends Component {
    render() {
        return (
            <AniLink
            to={this.props.route}
            cover
            direction={this.props.direction}
            duration={1}
            bg="black" 
            to={this.props.route}>
                <Back>
                    <SVG rotation={this.props.rotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></SVG>
                </Back>
            </AniLink>
        )
    }
}

export default ButtonBack
