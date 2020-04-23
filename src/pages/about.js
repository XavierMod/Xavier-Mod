import React, {Component} from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components';
import SEO from '../components/SEO';
import { sizes, largerThan, smallerThan } from '../components/Helpers/mediaQueries';

const AboutContent = styled.div`
    font-family: 'Noto Serif KR';
    letter-spacing: -1.3px;
    display: flex;
    margin-bottom: 70px;
    -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    ${smallerThan.tablet`
        display: block;
    `};
`;

const Title = styled.div`
    flex: 5;
    font-size: 60px;

    ${smallerThan.tablet`
        font-size: 30px;
        margin: 50px 0;
    `};
`;

const Description = styled.div`
    flex: 5;
`;

const Paragraph = styled.div`
    font-size: 23px;
    line-height: 40px;
    padding-bottom: 30px;

    ${smallerThan.tablet`
        font-size: 18px;
    `};

    a {
        color: grey;
        text-decoration: none;
    }
`;

const SmallParagraph = styled.div`
    font-size: 15px;
    letter-spacing: -0.8px;
`;

const PaddingTop = styled.div`
    padding-top: 70px;
`;

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultView: false
        }
    }
    render() {

        return (
            <>
            <Layout>
                <SEO title="About" />
                <PaddingTop />
                <AboutContent>
                    <Title>
                        hi.
                    </Title>
                    <Description>
                        <Paragraph>
                        I am a 22 y/o junior Front-End / UI Developer available for part-time oportunities. Based in London.
                        </Paragraph>

                        <Paragraph>
                        I'll be graduating from <a>Brunel University London</a> in 2021, where I'm studying a BSc in <a>Digital Design</a>.
                        </Paragraph>

                        <Paragraph>
                        My passion is to build UIs and digital products using web technologies.
                        </Paragraph>

                        <Paragraph>
                        +3 years of professional experience as a UI Designer and +1 year as a Web Developer.
                        </Paragraph>
                        <SmallParagraph>
                        HTML5+, JS ES6+, CSS3+, React.js (Gatsby, Redux, Styled components), GraphQL, NPM/Yarn, Git, Shopify, Headless CMS, Three.js, PHP, MySQL, Firebase.
                        </SmallParagraph>
                    </Description>
                </AboutContent>

                <AboutContent>
                    <Title>
                        experience
                    </Title>
                    <Description>
                        <Paragraph>
                        2019-2020. Front-End Developer (Junior) at <a>Karmoon</a>
                        </Paragraph>
                        <Paragraph>
                        2018-2019. UI Designer / Developer at <a>Fitsprint</a>
                        </Paragraph>
                        <Paragraph>
                        2017-2018. UI Designer / Visual Designer <a>Furgo</a>
                        </Paragraph>
                    </Description>
                </AboutContent>
            </Layout>
            </>
        )
    }
}

export default About;

