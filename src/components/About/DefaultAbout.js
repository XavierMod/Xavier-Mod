import React from 'react'
import styled from 'styled-components'
import TechStackModule from './TechStackModule'
import H3 from '../Library/Style/H3';

const DefaultAboutWrapper = styled.div`
    p {
        margin: 20px 0;
        font-size: 13px;
    }
`;

const TechStackWrapper = styled.div`
    text-align: center;
`;

const ExperienceBlock = styled.div`
    margin: 30px 0;
`;

const ExperienceLine = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 30px 0;


    img {
        flex: 5%;
        width: 10px;
        margin-right: 20px;
    }

    h1 {
        flex: 35%;
        padding-right: 20px;
        margin: 0;
    }

    p {
        flex: 60%;
        margin: 0;
        font-size: 12px;
    }
`;

const DefaultAbout = () => {
    return (
        <DefaultAboutWrapper>
            <H3 body="who am i" />
            <p>Hola! I love making digital things both look good and function in a browser/device at the same time by combining both design sensibilities and technical skills together. In other words, I'm a junior front end dev who can also design!. Actively seeking job opportunities and side projects. Based in London.</p>
            <p>Languages: 🇬🇧 English, 🇪🇸 Spanish, Catalan</p>

            <H3 body="skills / tech stack" />

            <TechStackWrapper>
                <TechStackModule text="HTML5+/CSS3+" percentage="90%" />
                <TechStackModule text="JavaScript ES6+" percentage="20%" />
                <TechStackModule text="React.js" percentage="30%" />
                <TechStackModule text="Redux" percentage="60%" />
                <TechStackModule text="Styled components" percentage="90%" />
                <TechStackModule text="Gatsby.js" percentage="20%" />
            </TechStackWrapper>

            <ExperienceBlock>
                <H3 body="MY CAREER (SO FAR)" />

                <ExperienceLine>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHE46B2AfQpbA/company-logo_100_100/0?e=1590624000&v=beta&t=nPnElYKyOlidIhfQmXMGY2e0ggPOrATfdyVA3a6wxuA" />
                    <H3 body="Front end developer (Junior) 2019-2020" />
                    <p>Karmoon is a Shopify web development agency (ecommerce) with over 5 years experience working for the world’s best Shopify stores. During my second year of university, I got hired at Karmoon as a junior front-end developer.</p>
                </ExperienceLine>

                <ExperienceLine>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGR2ZXzegaTTA/company-logo_100_100/0?e=1590624000&v=beta&t=5LWF2ZLfjNnU_4siRY_zYHmKefDEGWSMNY_Dph9iF5Q" />
                    <H3 body="UI Designer / Developer 2019." />
                    <p>FitSprint is a web platform for fitness instructors. During my first year of university, I got a Mobile UI internship at FitSprint (now Kameleon) and then got hired as a UI/Product Designer. I was in charge of creating, improving and wireframing as well as building prototypes, style guides and user flows. I also got involved in the Front-End team as a junior UI developer.</p>
                </ExperienceLine>

                <ExperienceLine>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQG7bkEe9Hj4qA/company-logo_100_100/0?e=1590624000&v=beta&t=ftNpy02a9ows5xxdgKVx1bzbyTrnNKW5PTReiLLyDsM
                    " />
                    <H3 body="UI / Visual Designer (junior) 2018." />
                    <p>Furgo is a SaaS Logistics Delivery Platform. I started as a Graphic/Motion Design Intern and then got hired as a UI designer to shape the UI of Furgo's digital products and experiences. I had the chance of working in a small startup team, with developers, business and product managers. I was partially in charge of some design decisions and I translated the given user-experience journey into a user-centered app and a smooth and intuitive SaaS logistics web solution.</p>
                </ExperienceLine>

            </ExperienceBlock>

        </DefaultAboutWrapper>
    )
}

export default DefaultAbout;
