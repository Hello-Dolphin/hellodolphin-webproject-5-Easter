import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
/* Images */
import cld01 from './images/navbar/cdnav.png'
import eg1 from './images/navbar/about.png'
import eg2 from './images/navbar/activity.png'
import eg3 from './images/navbar/history.png'
import eg4 from './images/navbar/home.png'
import eg5 from './images/navbar/symbol.png'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
const yourAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform:  rotate(360deg);
    }
`
const Container = styled.div`
    background-color: #BBB6D6;
    width : auto;
    height : 25vh;
`
const Cloud = styled.img`
    width: 100%;
    left: 0px;
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
`
const Eggs = styled.img`
    width: 5%;
    left: ${props => props.left};
    top: ${props => props.top};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    :hover{
        animation: ${yourAnimation} 1s ;
    }
`
export default class navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid">
                    {/* <Cloud src={cld02} marginTop="-60px"/> */}
                    <Cloud src={cld01} marginTop="-60px" />
                    <Eggs src={eg4} left="142px" top="128px" />
                    <Eggs src={eg1} left="439px" top="134px" />
                    <Eggs src={eg3} left="717px" top="124px" />
                    <Eggs src={eg5} left="1004px" top="104px" />
                    <Eggs src={eg2} left="1299px" top="108px" />
                </Container>
            </React.Fragment>
        )
    }
}

