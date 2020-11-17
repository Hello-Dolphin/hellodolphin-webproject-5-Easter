import React, { Component } from 'react'
import styled from 'styled-components'
import "animate.css/animate.min.css";
import but11 from '../images/button/egg1 (2).png'
import but12 from '../images/button/egg2 (2).png'
import but21 from '../images/button/rabbit1.png'
import but22 from '../images/button/rabbit2.png'
import but31 from '../images/button/flower1.png'
import but32 from '../images/button/flower2.png'
import but41 from '../images/button/candle1.png'
import but42 from '../images/button/candle2.png'
import but51 from '../images/button/bells1.png'
import but52 from '../images/button/bells2.png'
import sm from '../images/navbar/sm.png'
import cd02 from '../images/Pic/cloud2.png';
import b1 from '../images/Pic/b1.png';
import eggs1 from '../images/Pic/egg7.png'
import 'bootstrap/dist/css/bootstrap-grid.css';
import { AnimateOnChange } from 'react-animation';

const Container = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  height:auto;
  min-height: 100vh;
  le
`

const Div = styled.div`
  margin:5% 36% 5% 36%;
`

const Sym = styled.div`
margin-top:3%;
margin-bottom:8%;
margin-left:23%;
`
const Sm = styled.img`
margin-left: 13%;
`

const But11 = styled.img`
width:150px;
position: relative;
top:50%;
margin-right:3%;
`
const But21 = styled.img`
width:150px;
position: relative;
top:50%;
margin-right:3%;
`
const But31 = styled.img`
width:150px;
position: relative;
top:50%;
margin-right:3%;
`
const But41 = styled.img`
width:150px;
position: relative;
top:50%;
margin-right:3%;
`
const But51 = styled.img`
width:150px;
position: relative;
top:50%;
margin-right:3%;
`
const HisBlock = styled.div`
background-color: #FCE8CE;
border-style: dashed;
border-radius: 25px;
padding: 2%;
`
const Block = styled.div`
background-color: #FCE8CE;
width: 50%;
height: 50%;
border-radius: 25px;
position: relative;
left:25%;
margin-bottom: 3%;
padding: 1%;
`
const Cloud = styled.img`
    width: 150%;
    left: ${props => props.left};
    position: absolute;
    margin-top: ${props => props.marginTop};
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
export default class symbol extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: Math.random(),
      target: 0,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  }

  swapSymbol(target) {
    switch (target) {
      case 1:
        this.setState(state => ({
          key: Math.random(),
          show1: true,
          show2: false,
          show3: false,
          show4: false,
          show5: false, target /*target: target */
        }));
        break;
      case 2:
        this.setState(state => ({
          key: Math.random(),
          show1: false,
          show2: true,
          show3: false,
          show4: false,
          show5: false, target /*target: target */
        }));
        break;
      case 3:
        this.setState(state => ({
          key: Math.random(),
          show1: false,
          show2: false,
          show3: true,
          show4: false,
          show5: false, target /*target: target */
        }));
        break;
      case 4:
        this.setState(state => ({
          key: Math.random(),
          show1: false,
          show2: false,
          show3: false,
          show4: true,
          show5: false, target /*target: target */
        }));
        break;
      case 5:
        this.setState(state => ({
          key: Math.random(),
          show1: false,
          show2: false,
          show3: false,
          show4: false,
          show5: true, target /*target: target */
        }));
      default:
        break;
    }
  }

  render() {
    // JSX
    var element1 = this.state.show1 ? <But11 id="try" src={but12} /> : <But11 id="try" src={but11} />;
    var element2 = this.state.show2 ? <But11 id="try" src={but22} /> : <But11 id="try" src={but21} />;
    var element3 = this.state.show3 ? <But11 id="try" src={but32} /> : <But11 id="try" src={but31} />;
    var element4 = this.state.show4 ? <But11 id="try" src={but42} /> : <But11 id="try" src={but41} />;
    var element5 = this.state.show5 ? <But11 id="try" src={but52} /> : <But11 id="try" src={but51} />;

    var target;
    switch (this.state.target) {
      case 1:
        target = <Block ><HisBlock><p>ไข่อีสเตอร์ (Easter Egg)</p> <p>สัญลักษณ์ของความอุดมสมบูรณ์ ชีวิต และการเกิดใหม่ ไข่มีความเกี่ยวข้องกับเทศกาลอีสเตอร์มาตั้งแต่สมัยโบราณ ในช่วงเวลาถือศีลอดของชาวยิว จะห้ามกินไข่ หลังจากแม่ไก่ออกไข่ ไข่เหล่านั้นจะถูกเก็บไว้ จนกว่าถึงวันอีสเตอร์ หลังการให้ศีลให้พรแล้ว ไข่ที่ทาสีจนสวยงามจะถูกนำมามอบให้กับเด็กๆ</p> </HisBlock></Block>;
        break;
      case 2:
        target = <Block className="alittlebitleft"><HisBlock><p>กระต่าย</p> <p> คือสัญลักษณ์ของความอุดมสมบูรณ์ และเปรียบเสมือนผู้ส่งสารของอีสเตอร์ กระต่ายเข้ามาเกี่ยวข้องกับเทศกาลอีสเตอร์นับตั้งแต่ศตวรรษที่ 18</p></HisBlock></Block>;
        break;
      case 3:
        target = <Block><HisBlock><p>ดอกไม้อีสเตอร์</p> <p>คือดอกลิตเติ้ลเดซี่ (Little Daisy) ที่เบ่งบานประกาศการกลับมาของฤดูใบไม้ผลิ แม้บางพื้นที่ดอกไม้นี้จะออกดอกเกือบทั้งปี แต่เดือนที่มีการเบ่งบานมาที่สุดคือช่วงเดือนมีนาคม – ตุลาคม นอกจากนี้ยังมี ดอกลิลลี่สีขาว ที่มีเชื่อมโยงกับเทศกาลอีสเตอร์เพราะเป็นสัญลักษณ์ของความบริสุทธิ์</p></HisBlock></Block>;
        break;
      case 4:
        target = <Block className="alittlebitleft"><HisBlock ><p>เทียนปัสกา (Paschal Candle)</p> <p>เทียนสีขาวขนาดใหญ่ ชาวคริสต์จะเริ่มฉลองเทศกาล ด้วยการจุดเทียนปัสกา เพื่อรำลึกถึงการฟื้นคืนชีพแสงสว่างที่ออกมาจากอุโมงค์ที่มืดมิด</p></HisBlock></Block>;
        break;
      case 5:
        target = <Block><HisBlock><p>ระฆัง</p> <p>มักจะเป็นสีบรอนซ์หรือช็อคโกแลต ที่บรรเลงบทเพลงของกลอเรีย ตั้งแต่การสวดมนต์ในวันพฤหัสบดีแล้วเงียบลงไปจนถึงวันเสาร์ เพื่อแสดงความเคารพ ระลึกถึงพระเยซูที่ถูกตรึงบนไม้กางเขนในวันศุกร์ และระฆังจะบรรเลงอีกครั้งในวันอาทิตย์</p></HisBlock></Block>;
        break;
      default:
        target = null;
    }
    return (

      <div>



        <Container bgcolor="#A2E3FF">
        <div className="row">
                  <div className="col-3"> 
                  <Cloud src={cd02} className="clouding2" right="50%" marginTop="70%" />
                  </div>
                  <div className="col-6"> 
          </div>
          <div className="col-3"> 
                  <Eggs src={b1} right="10%" marginTop="-3%" />  
                  <Eggs src={eggs1} className="eggrotate2" right="70%" marginTop="140%" />    
                  <Cloud src={cd02} marginTop="150%" />
                  </div>
          </div>
                  
                  
          <Div><Sm src={sm} /></Div>
          <Sym>
            <span type="button" className="btn" onClick={() => this.swapSymbol.call(this, 1)}>{element1}</span>
            <span type="button" className="btn" onClick={() => this.swapSymbol.call(this, 2)}>{element2}</span>
            <span type="button" className="btn" onClick={() => this.swapSymbol.call(this, 3)}>{element3}</span>
            <span type="button" className="btn" onClick={() => this.swapSymbol.call(this, 4)}>{element4}</span>
            <span type="button" className="btn" onClick={() => this.swapSymbol.call(this, 5)}>{element5}</span>
          </Sym>
          <AnimateOnChange animationIn="bounceIn"
            animationOut="bounceOut"
            durationOut={500}>
            {target}
          </AnimateOnChange>
        
        </Container>
      </div>
    )
  }
}
