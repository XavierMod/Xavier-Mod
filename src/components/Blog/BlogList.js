import React, { Component } from 'react'
import BlogThumbnail from './BlogThumbnail'

class BlogList extends Component {

    state = {
        posts: undefined
    }

    componentWillMount() {
        this.setState({
            posts: this.props.data
        })
    }

    render() {
        return (
            <>
            {this.state.posts.map((el, ind) => {
                return( <BlogThumbnail 
                        key={ind} 
                        post={el.node}
                    
                    />)
            })}
            </>
        )
    }
}

export default BlogList
