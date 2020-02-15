import React, {Component} from 'react'
import Layout from '../components/Layout/Layout'
import ChatFeature from '../components/About/ChatFeature/ChatFeature'
import DefaultAbout from '../components/About/DefaultAbout';
import styled from 'styled-components';

const ChangeView = styled.div`
    text-align: right;
    padding: 10px 0;

    span {
        font-weight: 500;
        cursor: pointer;
        opacity: 0.5;
        transition: all ease 0.15s;

        &:hover {
            opacity: 1;
        }
    }
`;

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultView: false
        }
    }
    render() {

        const switchViews = () => {
            this.setState({defaultView: !this.state.defaultView})
        }

        return (
            <Layout>
                <ChangeView><span onClick={switchViews}>Switch views</span></ChangeView>
                {this.state.defaultView ? <DefaultAbout /> : <ChatFeature />}
            </Layout>
        )
    }
}

export default About;

