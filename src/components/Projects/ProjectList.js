import React, { Component } from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import styled from 'styled-components'
import H3 from '../Library/Style/H3'
import {Link} from 'gatsby'

const ProjectsBlock = styled.div`
        text-align: center;
        margin-bottom: 100px;

        h1, p {
            text-align: left;
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
                    <H3 body="featured projects" />
                    <p>my favourite projects. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.featuredProject == true) {
                            return (
                                <Link
                                    to={'projects/' + el.node.slug}
                                >
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                </Link>)
                        }
                    })}
                </ProjectsBlock>
                <ProjectsBlock>
                    <H3 body="front end projects" />
                    <p>My top priority projects. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.type == 'Front-End Development' && el.node.featuredProject !== true && el.node.agedWarning == null) {
                            return (
                                <Link
                                    to={'projects/' + el.node.slug}
                                >
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                </Link>)
                        }
                    })}
                </ProjectsBlock>
                <ProjectsBlock>
                    <H3 body="UI Design projects" />
                    <p>I have been a UI Designer +3 years and worked in professional projects. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.type == 'UI Design' && el.node.featuredProject !== true) {
                            return (
                                <Link
                                    to={'projects/' + el.node.slug}
                                >
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                </Link>)
                        }
                    })}
                </ProjectsBlock>
                <ProjectsBlock>
                    <H3 body="OUTDATED Front End Projects" />
                    <p>Front End projects that have now become outdated because my coding skills have gone a bit better and now I use other frameworks, etc. </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.agedWarning == true) {
                            return (
                                <Link
                                    to={'projects/' + el.node.slug}
                                >
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                </Link>)
                        }
                    })}
                </ProjectsBlock>
                <ProjectsBlock>
                    <H3 body="Other projects" />
                    <p>Other digital areas I don't specialise in but I still enjoy! </p>
                    {this.state.projects.map((el, ind) => {
                        if (el.node.type !== 'UI Design' && el.node.type !== 'Front-End Development') {
                            return (
                                <Link
                                    to={'projects/' + el.node.slug}
                                >
                                    <ProjectThumbnail
                                        project={el.node}
                                    />
                                </Link>)
                        }
                    })}
                </ProjectsBlock>
            </React.Fragment>
        )
    }
}
export default ProjectList;
