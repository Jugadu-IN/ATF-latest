import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";
import classes from "../CSS/getStarted.module.css";
import { Link } from "react-router-dom";


const AboutUs = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div >
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    height:"100%",
                    padding:"2%"}}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>Who we are</h1>
                <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0"}}>
                    <Row>
                        <Col md={6} xs={12} >
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
                            <p>Aditya Tex Fab started their buisness in 1991 and today have gained a lot of reputation in the field of cloth manufacturing. We deal in all types of printed  cotton cloth, dyed cotton cloth, yarn dyed cotton fabric, grey cotton cloth, rayon,cambric, poplin, sheeting, voiles, duck fabric, canvas cloth and interlining cloth.</p><br/>
                            <Link to="/aboutus">Know more >></Link>
                        </Col>
                    </Row>
                </div>

            </div>
            </div>
        </>
    )
}
export default AboutUs