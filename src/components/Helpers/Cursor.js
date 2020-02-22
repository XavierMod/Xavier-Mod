import React, {Component} from 'react'
import styled from 'styled-components'

const CursorWrapper = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    transition-timing-function: ease-out;
    animation: cursorAnim .5s infinite alternate;
    pointer-events: none;
    z-index: 100;
    position: fixed;

    &::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        border: 8px solid gray;
        border-radius: 50%;
        opacity: .5;
        top: -8px;
        left: -8px;
        animation: cursorAnim2 .5s infinite alternate;
        transform: scale(3);

    }

    @keyframes cursorAnim {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(.7);
        }
    }

    @keyframes cursorAnim2 {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(.4);
        }
    }

    @keyframes cursorAnim3 {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(3);
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }

    .expand {
        animation: cursorAnim3 .5s forwards;
        border: 1px solid red;
    }

    p {
        color: white;
        font-family: 'arial';
        text-align: center;
        margin-top: 50px;
        font-size: 1.4em;
        
        a {
            color: teal;
        }
    }
`;


class Cursor extends Component {

    cursorFunctionality = () => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })
    }

    componentDidMount() {
        this.cursorFunctionality()
    }

    render() {
        return (
            <CursorWrapper className="cursor" />
        )
    }
}

export default Cursor