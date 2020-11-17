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
import '../index.css'

const yourAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform:  rotate(360deg);
    }
`
const cloud = keyframes`   
    0%{ left: 10vh; }
    50%{ left: -10vh; }
    100%{ left: 10vh; }

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
    top: 0px;
    position: fixed;
    z-index: 39;
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    animation: ${cloud} 20s linear infinite ;
`
const Eggs = styled.img`
    width: 80px;
    left: ${props => props.left};
    top: ${props => props.top};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    :hover{
        animation: ${yourAnimation} 1s ;
    }
    position: fixed;
    z-index: 39;
`
const Waybackhome = styled.button`
    float: right;
`
export default class navbar extends Component {

    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid lock">
                    {/* <Cloud src={cld02} marginTop="-60px"/> */}
                    
                    <Cloud src={cld01}/>
                     
                    
                        <a href="#home"><Eggs src={eg4} left="24vw" top="10px" /></a>
                        <a href="#about"><Eggs src={eg1} left="36vw" top="10px" /></a>
                        <a href="#history"><Eggs src={eg3} left="48vw" top="10px" /></a>
                        <a href="#symbol"><Eggs src={eg5} left="60vw" top="10px" /></a>
                        <a href="#activity"><Eggs src={eg2} left="72vw" top="10px" /></a>
                    
                    
                       
                    
                </Container>
            </React.Fragment>
        )
    }
}

