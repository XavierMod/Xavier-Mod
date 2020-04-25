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

class ProjectList extends Component {

    componentWillMount() {
        this.setState({
            projects:this.props.projects
        })
    }

    render() {
        return (
            <React.Fragment>
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
                <ProjectsBlock>
                    <H3 body="Front-End Projects" />
                    <p>My top priority projects. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.type == 'Front-End Development' && el.node.featuredProject !== true && el.node.agedWarning == null) {
                            return (
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                )
                        }
                    })}
                </ProjectsBlock>
                <ProjectsBlock>
                    <H3 body="UI Design projects" />
                    <p>I have been a UI Designer +3 years and worked in professional projects. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.type == 'UI Design' && el.node.featuredProject !== true) {
                            return (
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                )
                        }
                    })}
                </ProjectsBlock>
            </React.Fragment>
        )
    }
}
export default ProjectList;
