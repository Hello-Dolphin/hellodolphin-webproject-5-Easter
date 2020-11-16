import React, { Component } from 'react'
import styled from 'styled-components'
/* Images */
import cd2 from '../images/Pic/cd2.png'
import cd3 from '../images/Pic/cd3.png'
import etf from '../images/LOGO/lg4.png'
import etf2 from '../images/LOGO/lg3.png'
import mascot from '../images/Mascot/mascot1.png'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const Container = styled.div`
    background-color: #BBB6D6;
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 100px;
    overflow: hidden;
`
const AnimateCloud = styled.img`
    width: 125%;
    left: -30vh;
    position: absolute;
    margin-top: ${props=> props.marginTop};
`
const Mascot = styled.img`
    width : 25%;
    left : 7%;
    position :absolute;
    margin-top : 9%;
`
const Logo = styled.img`
    width : 38%;
    left: 0px;
`
export default class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container id="home" className="container-fluid">
                    <div className="row">
                        <div className="col-12"> 
                            <AnimateCloud className="clouding1" src={cd3} marginTop="33.5vh"/>
                            <div className="mainlogo">
                            <Logo src={etf} alt="mainlogo"/>
                            <Logo src={etf2} className="secondlogo" alt="secondlogo"/>
                            </div>
                            <AnimateCloud className="clouding2" src={cd2} marginTop="41vh"/>
                            <Mascot src={mascot}/>
                            </div>
                        </div>
                </Container>
            </React.Fragment>
        )
    }
}
