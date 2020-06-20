import React , {Component} from "react";
import Products from "../products/products";
import CustomNavbar from "../component/navbar";
import bg2 from "../assets/bg2.jpg";
import { Card, Col, Row } from "react-bootstrap";
import classes from "../CSS/collection.module.css";
import CustomNavbar2 from "../component/navbar2";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../component/footer";

class Myproducts extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
            let mydata = Products.filter((item)=>{
               return item.titleId===this.props.match.params.myProductTitleId; 
            })
            // console.log("My props",this.props.match)
            // console.log( "data", mydata)
            // console.log("**********")
        return(
            <>
                <div><CustomNavbar2/></div>
                <div style={{backgroundImage:`url(${bg2})`,
            backgroundSize:"100% 100%",display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily: 'Lexend Giga',
            marginTop:"8vh",
            height:"500px",
            width:"100vw",
            color:"white"}} > 

            <center><h1>{mydata[0].title} </h1></center>

                </div>
                <div className="conatiner-fluid" >
                   <Row >
                {
                     mydata[0].products.map((item)=>{
                       return(
                           <>
                            <Col data-aos="fade-right" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card className={classes.Card}>
                                <Card.Img variant="top" src={item.image} className={classes.Img} />
                                <Card.Body>
                                    <Card.Title> {item.title} </Card.Title>
                                    <Card.Text>Width: {item.width} </Card.Text>
                                    <Card.Text>Minimum amount: {item.minimum} per colour</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                           </>
                       )
                    })
                }
                </Row>
                
                </div>
                <div><Footer/></div>

            </>
        )
    }

}
export default Myproducts;
