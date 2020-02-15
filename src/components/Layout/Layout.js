import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
    padding: 30px;
    max-width: 800px;
    margin: auto;
`;

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <NavBar />
            {props.children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout
