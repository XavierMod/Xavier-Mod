import React, { Component } from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import styled from 'styled-components'
import H3 from '../Library/Style/H3'
import {Link} from 'gatsby'
import { sizes, largerThan, smallerThan } from '../Helpers/mediaQueries';


const ProjectsBlock = styled.div`
        text-align: center;
        margin-bottom: 100px;
        padding-top: 60px;

        h1, p {
            font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
            text-align: center;
            font-size: 30px;
            letter-spacing: -0.3px;
        }

        p {
            font-size: 12px;
        }
`;

const ProjectsBar = styled.div`
        font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
        background: #212121;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #212121;
        max-width: 700px;
        margin: auto;
        margin-bottom: 0px;
        position: relative;

        ${smallerThan.tablet`
            background: none;
        `};

        li {
            display: inline-block;
            margin: 20px;
            opacity: 0.3;
            cursor: pointer;
            transition: all ease .3s;

            ${smallerThan.tablet`
                font-size: 11px;
                margin: 5px;
            `};

            ${largerThan.mobile`
                font-size: 21px;
                margin: 15px;
            `};

            &:hover {
                opacity: 1;
            }
        }
`;

class ProjectList extends Component {

    state = {
        activeTab: 'featured'
    }

    componentWillMount() {
        this.setState({
            projects: this.props.projects
        })
    }

    renderProjects = () => {
        if (this.state.activeTab == 'featured') {
            return(
                <ProjectsBlock>
                <H3 body="Featured projects" />
                {this.state.projects.map((el, ind) => {
                    if (el.node.featuredProject == true) {
                        return (
                                <ProjectThumbnail
                                    project={el.node}
                                />
                            )
                    }
                })}
            </ProjectsBlock>
            )
        } else if (this.state.activeTab == 'front-end') {
            return(
                <ProjectsBlock>
                <H3 body="Front-End Projects" />
                <p>My top priority projects. </p>
                {this.state.projects.map((el, ind) => {
                    if (el.node.type == 'Front-End Development') {
                        return (
                                <ProjectThumbnail
                                    project={el.node}
                                />
                            )
                    }
                })}
            </ProjectsBlock>
            )
        } else if (this.state.activeTab == 'full-stack') {
            return(
                <ProjectsBlock>
                <H3 body="Full-Stack Projects" />
                {this.state.projects.map((el, ind) => {
                    if (el.node.type == 'Full-Stack Development') {
                        return (
                                <ProjectThumbnail
                                    project={el.node}
                                />
                            )
                    }
                })}
            </ProjectsBlock>
            )
        } else if (this.state.activeTab == 'ui-design') {
            return(
                <ProjectsBlock>
                <H3 body="UI Design projects" />
                <p>I have been a UI Designer +3 years and worked in professional projects. </p>
                {this.state.projects.map((el, ind) => {
                    if (el.node.type == 'UI Design') {
                        return (
                                <ProjectThumbnail
                                    project={el.node}
                                />
                            )
                    }
                })}
            </ProjectsBlock>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <ProjectsBar>
                       <u>
                           <li 
                           onClick={() => this.setState({activeTab: 'featured'})}
                           style={this.state.activeTab == 'featured'? {opacity: 1} : {opacity: 0.2}}>featured</li>
                           <li 
                           onClick={() => this.setState({activeTab: 'front-end'})}
                           style={this.state.activeTab == 'front-end'? {opacity: 1} : {opacity: 0.2}}>front-end</li>
                           <li 
                           onClick={() => this.setState({activeTab: 'full-stack'})}
                           style={this.state.activeTab == 'full-stack'? {opacity: 1} : {opacity: 0.2}}>full-stack</li>
                           <li 
                           onClick={() => this.setState({activeTab: 'ui-design'})}
                           style={this.state.activeTab == 'ui-design'? {opacity: 1} : {opacity: 0.2}}>ui-design</li>
                       </u>
                </ProjectsBar>
                {this.renderProjects()}
            </React.Fragment>
        )
    }
}
export default ProjectList;
