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

const MenuWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const ProjectsOptionsList = styled.div`
        font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
        padding: 20px;
        display: flex;
        background: #212121;
        max-width: 700px;
        text-align: left;
        
        li {
            margin: 30px 0;
            opacity: 0.3;
            cursor: pointer;
            transition: all ease .3s;
            font-size: 18px;

            &:hover {
                opacity: 1;
            }
        }
`;

const ProjectsOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212121;
    padding: 0 5px;
    margin: auto;
    position: relative;
    max-width: 700px;

    h1 {
        flex: 9;
        font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
        margin-left: 15px;
    }

    svg {
        flex: 1;
        padding: 20px;
        fill: white;
        transform: scale(0.7) rotate(${props => props.rotation});
        opacity: 0.5;
        cursor: pointer;
        transition: ease .2s all;

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

    renderList = () => {
        return(
            <ProjectsOptionsList>
            <ul>
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
            </ul>
     </ProjectsOptionsList>
        )
    }
 
    render() {
        return (
            <React.Fragment>
                <MenuWrapper>
                    <ProjectsOptions rotation={this.state.showProjectsOptions ? '90deg' : '-90deg'}>
                        <h1>{this.state.activeTab}</h1>
                        <svg onClick={() => this.setState({showProjectsOptions: !this.state.showProjectsOptions})} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </ProjectsOptions>
                    {this.state.showProjectsOptions ? this.renderList() : null}
                </MenuWrapper>
                {this.renderProjects()}
            </React.Fragment>
        )
    }
}
export default ProjectList;
