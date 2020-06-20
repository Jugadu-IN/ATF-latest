import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Content from "../products/content";
import { Card, Col, Row, Button } from "react-bootstrap";
import classes from "../CSS/collection.module.css";
import { Link } from "react-router-dom";
import Products from "../products/products";

const Collections = (props)=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <>
            <div className="container-fluid" id="collection" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            padding:"2%"}}>
                <h1 data-aos="fade-up" style={{textAlign:"center",marginBottom:"2%"}}>Our Collections</h1>
                <Row >
                {
                    Content.products.map((product)=>{
                       return(
                           <>
                            <Col data-aos="fade-right" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card className={classes.Card}>
                                <Card.Img variant="top" src={product.image} className={classes.Img} />
                                <Card.Body>
                                    <Card.Title> {product.title} </Card.Title>
                                    {/* <Card.Text>Width: {product.width} </Card.Text>
                                    <Card.Text>Minimum width: {product.minimum} per colour</Card.Text> */}
                                    <Link to={`/product/${product.titleId}`}><Button variant="outline-danger">See all designs</Button></Link> 
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                           </>
                       )
                    })
                }
                </Row>

            </div>
        </>
    )
}
export default Collections;