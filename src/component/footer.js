import React from 'react';
import classes from "../CSS/footer.module.css";
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = (props)=>{
    return(
        <div>
            <div className={classes.Footer} style={{backgroundColor:"#FCDFE1",backgroundSize:"100% 100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        fontFamily:"Lexend Giga",
        color:"black",
        padding:"2%",}} >
                <center>
                   <h1>ADITYA TEX FAB</h1>
                </center>
                <br/>
                <div style={{display:"flex",
                alignItems:"left",
                justifyContent:"center",
                flexDirection:"column"}}>
                            <Row>
                    <Col xs={5}>
                        <div style={{display:"flex",
                
                justifyContent:"center",
                flexDirection:"column"}}>
                    <br/><br/><br/>
                    <Link activeClass="active"
                    to="getStarted"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    ><h4>Home</h4></Link>
                        
                        <br/>
                        <Link activeClass="active"
                    to="about"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    ><h4>About Us</h4></Link>
                        
                        <br/>
                        <Link activeClass="active"
                    to="collection"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    ><h4>Collections</h4></Link>
                        
                        <br/>
                        <Link activeClass="active"
                    to="contact"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={2000}
                    offset={-50}
                    ><h4>Contact Us</h4></Link>
                        </div>
                    </Col>
                    <Col xs={7}>
                    <center><h2>Products</h2></center>
                        <Row>
                            <Col sm={4} >
                                <left><p>40/40 Laffer Print</p>
                                <p>40/40 Cotton Print</p>
                                <p>50/50 Sattan Print</p>
                                <p>40/30 Cavalary Print</p>
                                <p>40/40 Twill Print</p></left>
                            </Col>
                            <Col sm={4} >
                                <left><p>40/20 Dobby Print</p>
                                <p>50/50 Sattan Print( Dot Design)</p>
                                <p>40/40 Purshian Print</p>
                                <p>40/40 Twill (Dyed)</p></left>
                            </Col>
                            <Col sm={4} >
                                <left><p>40/40 dobby</p>
                                <p>40/40/124/64 Twill Dyed</p>
                                <p>40/40 Broken Twill (Dyed)</p>
                                <p>40/40/120/64 Plain (Dyed)</p>
                                <p>40/40/120/64 Laffer (Dyed)</p></left>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </div>
                <h3>
                    Get in touch:
                </h3>
                <p>
                <i class="fab fa-twitter"></i>
                </p>
                
            </div>
            
        </div>
    )
}

export default Footer;