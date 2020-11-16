import React, { Component } from 'react'
import styled from 'styled-components'
import ac from '../images/navbar/ac.png'
import cloud3 from '../images/Pic/cloud3.png'
import draw4 from '../images/Pic/draw4.png'
import easter1 from '../images/Pic/easter1.png'
import rabbit3 from '../images/Mascot/rabbit3.png'
import cloud2 from '../images/Pic/cloud2.png'
import '../../index.css'

const Container = styled.div`
    background-color: ${props => props.bgcolor};
    width: 100%;
    height:100%;
    min-height: 100vh; 
    text-align:center; 
`

export default class activity extends Component {
    render() {
        return (
            <div>
                <Container bgcolor="#A2E3FF">
                    <div className="counter2">
                        <img className="cloud3" src={cloud3} />
                        <img className="cloud2" src={cloud2} />
                        <img className="ac" src={ac} />
                        <img className="rabbit-fly" src={rabbit3} />
                        <div className="rectangle">
                            <img class="draw4 " src={draw4} />
                            <div className="ac1">
                                <div className="">
                                    <p>ชาวคริสต์แต่ละครอบครัวจะแต่งตัวสวยงาม</p>
                                    <p> มาร่วมพิธีกรรมในโบสถ์พร้อมร้องเพลงสรรเสริญ</p>
                                    <p>พระเจ้านอกจากนี้บางครอบครัวก็มักจะตกแต่งไข่</p>
                                    <p>เป็นลวดลายสีสันต่างๆเพื่อนำมามอบให้แก่กันและกัน</p>
                                </div>
                            </div>
                        </div>
                        <div className="rectangle2">
                            <img class="easter1 " src={easter1} />
                            <div className="ac1">
                                <div className="">
                                    <p>ส่วนบางโบสถ์ก็จัดกิจกรรมร่วมรับประทาน</p>
                                    <p> อาหารเพื่อเฉลิมฉลองอย่างยิ่งใหญ่รวมไปถึงจัดเกม </p>
                                    <p>สนุกๆให้แต่ละครอบครัวหาไข่อีสเตอร์ที่ถูกซ่อนเอา</p>
                                    <p>ไว้ในพุ่มไม้หรือกอหญ้าต่างๆเพื่อให้ผู้เฉลิมฉลองได้</p>
                                    <p>ช่วยกันค้นหาและได้ใช้เวลาแห่งความสุขในวันอีสเตอร์ร่วมกัน</p>




                                </div>
                            </div>
                        </div>


                    </div>
                </Container>
            </div>
        )
    }
}
