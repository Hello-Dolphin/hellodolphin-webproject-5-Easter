import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";
import '../history.css'
import '../../index.css'

import jesus3 from '../images/Pic/jesus3.png'
import jesus4 from '../images/Pic/jesus4.png'
import jesus2 from '../images/Pic/jesus2.png'
import hs from '../images/navbar/hs.png'
import eggs1 from '../images/Pic/egg2.png'
import eggs2 from '../images/Pic/egg1.png'
import cd01 from '../images/Pic/cloud3.png';
import cd02 from '../images/Pic/cloud2.png';
import bl01 from '../images/Pic/bl1.png';
import bl02 from '../images/Pic/bl2.png';

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: cover;
  height:cover;
  min-height: 100vh; 
`
const Hs = styled.img`

`
const Div = styled.div`
  margin:0% 21% 2% 21%;
`

const HisBlock = styled.div`
background-color: #F5CCD1;
border-style: dashed;
border-radius: 25px;
padding: 2%;
`
const HisBlock2 = styled.div`
background-color: #F5CCD1;
border-style: dashed;
border-radius: 25px;
`
const Block = styled.div`
background-color: #F5CCD1;
width: auto;
height: auto;
border-radius: 25px;
position: relative;
margin-bottom: 3%;
padding 1%;
`

const Jes3 = styled.img`
width: 500px;
height:auto;
position relative;
left:6%;
margin-bottom:4%;
`

const Jes4 = styled.img`
   width:250px;
   height:auto;
   position relative;
   left: 2%;
`
const Jes2 = styled.img`
   width: 250px;
   height:auto;
`
const Eggs = styled.img`
    width: 35%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    z-index: 1;
`
const Cloud = styled.img`
    width: 150%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
    filter: drop-shadow(5px 6px 4px rgba(0,0,0,0.25));
    `

export default class history extends Component {
    render() {
        return (

          <React.Fragment>
          <Container id="about" className="container-fluid">
              <div className="row">
                  <div className="col-3">
                            <Cloud src={cd01} left="-40%" marginTop="400%" />
                            <Eggs src={eggs2} className="eggrotate" left="50%" marginTop="390%" />   
                            <Eggs src={eggs1} left="20%" marginTop="390%" />
                            <Cloud src={cd02} className="clouding2" right="50%" marginTop="130%" />
                            
                             
                  </div>
                  <div className="col-6">
                            <ScrollAnimation animateIn="animate__fadeInUp" duration={2} delay={2} initiallyVisible={false}>

                            <Div><Hs src = {hs} /></Div>

                            <Eggs src={bl02} left="-20%" marginTop="-20%" />
                            <Eggs src={bl01}  left="90%" marginTop="60%" />

        <Block>
        <HisBlock>
        <Jes3 src = {jesus3} />
        <div class="p1">
        <p>ตามที่ได้มีการบันทึกไว้ในพระคัมภีร์ใหม่ พระเยซูได้เสด็จไปกรุงเยรูซาเล็มพร้อมกับอัครสาวก เพื่อประกอบพิธี Passover</p>
        </div>
        </HisBlock>
        </Block>
        
        <Block>
      <HisBlock >
      <div class="row3">
      <div class="column2">
        {<Jes4 src = {jesus4} />}
        </div>
        <div class="column22">
        <div class="p2">
        <p>ในการรับประทานอาหารค่ำในวันพฤหัสบดีศักดิ์สิทธิ์ พระองค์ได้ทรงประทานพิธีมหาสนิท หลังอาหารค่ำคืนนั้น พระองค์และอัครสาวกก็ถูกอายัดตัวแล้วนำไปเฆี่ยนตีอย่างทรมาณ</p>
        </div>
        </div>
        </div>
        </HisBlock>
        </Block>

        <Block>
        <HisBlock2 >
        <div class="row3">
        <div class="column32">
        <div class="p3">
        <p>วันศุกร์ถัดมา (Good Friday) พระองค์ก็ถูกนำไปตรึงบนไม้กางเขนจนสิ้นพระชนม์บนไม้กางเขน จากนั้นก็ถูกนำบรรจุอยู่ในอุโมงค์ แล้วพระองค์ก็ทรงฟื้นพระชนม์ขึ้นมาในวันอาทิตย์ ที่เรียกกันในปัจจุบันว่า Easter Sunday</p>
        </div></div>
        <div class="column3">
        <Jes2 src = {jesus2} />
        </div>
        </div>
        </HisBlock2>
        </Block>
        </ScrollAnimation>
        </div>
            
                        <div className="col-3">
                        
                        <Cloud src={cd02} className="clouding2" left="30%" marginTop="260%" />
                        </div>

                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

