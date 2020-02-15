import React from 'react'
import styled from 'styled-components'
import TechStackModule from './TechStackModule'

const DefaultAboutWrapper = styled.div`
    h3 {
        margin: 20px 0;
        font-weight: 500;
    }

    p {
        margin: 20px 0;
    }
`;

const TechStackWrapper = styled.div`
    text-align: center;
`;

const DefaultAbout = () => {
    return (
        <DefaultAboutWrapper>
            <h3>who am i?</h3>
            <p>Hola! I love making digital things both look good and function in a browser/device at the same time by combining both design sensibilities and technical skills together. In other words, I'm a junior front end dev who can also design!. Actively seeking job opportunities and side projects. Based in London.</p>
            <p>Languages: 🇬🇧 English, 🇪🇸 Spanish, Catalan</p>

            <h3>skills / tech stack</h3>

            <TechStackWrapper>
                <TechStackModule text="HTML5+/CSS3+" percentage="90%" />
                <TechStackModule text="JavaScript ES6+" percentage="90%" />
                <TechStackModule text="React.js" percentage="90%" />
                <TechStackModule text="Redux" percentage="90%" />
                <TechStackModule text="Styled components" percentage="90%" />
                <TechStackModule text="Gatsby.js" percentage="90%" />
            </TechStackWrapper>
        </DefaultAboutWrapper>
    )
}

export default DefaultAbout;
