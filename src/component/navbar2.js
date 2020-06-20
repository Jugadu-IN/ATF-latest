import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import classes from "../CSS/navbar2.module.css";
import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const CustomNavbar2 = ()=>{
    return(
        <>
        <div>
        <Navbar style={{fontFamily:"Lexend Giga"}} bg="light" expand="lg" fixed="top">
            <Navbar.Brand>ADITYA TEX FAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
                    <NavLink className={classes.mynavlinks} to="/">Go back</NavLink>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar2;