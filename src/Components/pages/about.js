import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";
/* Image */
import eggs1 from '../images/Pic/egg3.png'
import eggs2 from '../images/Pic/egg4.png'
import ab2 from '../images/navbar/ab2.png';
import cd01 from '../images/Pic/cloud2.png';
import cd02 from '../images/Pic/cloud3.png';
import mascot from '../images/Mascot/rabbit2.png'
import cd1 from '../images/Pic/cd1.png'
/* CSS */
import '../../index.css'



const Container = styled.div`
    background-color: #A2E3FF;
    width: 100%;
    min-height: 100vh; 
    padding-bottom: 300px;
    padding-top: 200px;
    text-align: center;
    overflow: hidden;
`
const Ab2 = styled.img`
    margin-top: 25%;
    position:relative;
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
`
const Cloud = styled.img`
    width: 150%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
`
const AnimateCloud = styled.img`
    width: 130%;
    left: -35vh;
    position: absolute;
    margin-top: ${props => props.marginTop};
`
const Mascot = styled.img`
    width: 75%;
    margin-top: 20%;
    right: 15% ;
    position :absolute;
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
`
const Eggs = styled.img`
    width: 35%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    z-index: 1;
`
const Contentblock = styled.div`
    max-width: 720px;
    margin: 0 auto;
    background: #F5CCD2;
    border-radius: 50px;
    display: flex;
    padding: 10px;
`
const Content = styled.p`
    border: 2px dashed #333333;
    border-radius: 50px;
    font-size: 20px;
    padding: 30px;
    /* max-width: 1000px; */
`
export default class about extends Component {
    render() {
        return (
            <React.Fragment>
                <Container id="about" className="container-fluid">
                    <div className="row">
                    <AnimateCloud className="clouding3" src={cd1} marginTop="-23%" />
                        <div className="col-3">
                            <Cloud src={cd01} left="-40%" marginTop="90%" />
                            <Eggs src={eggs1} left="43%" marginTop="80%" />
                            <Eggs src={eggs2} className="eggrotate" left="70%" marginTop="90%" />
                        </div>
                        <div className="col-6">
                            <ScrollAnimation animateIn="animate__fadeInUp" duration={2} delay={2} initiallyVisible={false}>
                            <Ab2 src={ab2} />
                            <Contentblock>
                                <Content>เป็นหนึ่งในเทศกาลที่สำคัญมากที่สุดในศาสนาคริสต์
                                จัดขึ้นเพื่อเฉลิมฉลองการคืนพระชนม์ของพระเยซูหลังจากที่ทรง
                                ถูกตรึงกางเขนและสิ้นพระชนม์ไปแล้ว 3 วัน โดยวันที่จะ
                                เปลี่ยนไปในแต่ละปีแต่กำหนดให้ทุกปีต้องจัดขึ้นใน<br/>
                                    <normal>“วันอาทิตย์”</normal>
                                </Content>
                            </Contentblock>
                            </ScrollAnimation>
                        </div>
                        <div className="col-3">
                            <Mascot src={mascot} className="swing" />
                            <Cloud src={cd02} className="clouding2" left="0%" marginTop="130%" />
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
