import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar style={{fontFamily:"Lexend Giga"}} bg="light" expand="lg" fixed="top">
            <Navbar.Brand>ADITYA TEX FAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
                
                <Link activeClass="active"
                    to="getStarted"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Home</Link>
               
            
                <Link activeClass="active"
                    to="about"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >About Us</Link>
    
                
                <Link activeClass="active"
                    to="collection"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Collections</Link>
               
                <Link activeClass="active"
                    to="contact"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={2000}
                    offset={-50}
                    >Contact Us</Link>
                
                <Link activeClass="active"
                    to="payment"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    >Payment</Link>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;