import React, { Component } from 'react'
import BlogThumbnail from './BlogThumbnail'
import BlogPagination from './BlogPagination'

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
        console.log(this.state)
        return (
            <>
            {this.state.posts.map((el, ind) => {
                return( <BlogThumbnail 
                        key={ind} 
                        post={el.node}
                    
                    />)
            })}
            <BlogPagination />
            </>
        )
    }
}

export default BlogList
