import React from 'react'
import styled from 'styled-components'

const TechStackModule = (props) => {

    const TechStackModuleWrapper = styled.div`
        display: inline-flex;
        width: 200px;
        margin: 20px 0;
        padding-right: 40px;
    `;

    const TechStackModuleText = styled.div`
        flex: 5;
        text-align: right;
        font-size: 11px;
    `;

    const BarWrapper = styled.div`
        background: #e0f0ff;
        flex: 5;
        position: relative;
    `;

    const BarCompleted = styled.div`
        background: #037ffc;
        position: absolute;
        width: ${props.percentage};
        height: 100%;
    `;


    return (
        <TechStackModuleWrapper>
            <BarWrapper>
                <BarCompleted></BarCompleted>
            </BarWrapper>
            <TechStackModuleText>{props.text}</TechStackModuleText>
        </TechStackModuleWrapper>
    )
}

export default TechStackModule
