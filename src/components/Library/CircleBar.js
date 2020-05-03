import React from 'react';
import styled from 'styled-components'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Wrapper = styled.div`
    display: inline-block;
    margin: 10px;
    color: ${props => props.color};
    text-align: center;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }

    img {
        filter: invert();
    }

    p {
        text-align: center;
        margin: 20px 0;
        color: white;
        font-family: 'DM Serif Display';
        letter-spacing: 0.3px;
    }

    .CircularProgressbar {
        width: 70px;
    }

    .CircularProgressbar-path {
        stroke: rgb(${props => props.color});
    }
    .CircularProgressbar-trail {
        stroke: rgba(${props => props.color}, 0.1);
    }
    .CircularProgressbar-text {
        fill: white;
        font-weight: bold;
        font-size: 21px;
        font-family: sans-serif;
    }
    .CircularProgressbar-background {
    }
    
`;
 
const CircleBar = (props) => {
    return(
        <Wrapper color={props.color}>
            <a href={props.link} target="_blank">
                <CircularProgressbarWithChildren
                value={props.percentage} 
                counterClockwise={false}>
                    <img height="22" width="22" src={`https://unpkg.com/simple-icons@v2/icons/${props.iconName}.svg`} />
                </CircularProgressbarWithChildren> 
            </a>
        </Wrapper>
    )
}

export default CircleBar;