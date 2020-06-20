import React ,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const Know = ()=>{
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    console.log("*************************")
    return(
        <>
        <div data-aos="fade-down">
            <div className="container-fluid" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    height:"100%",
                    padding:"2%"}}>
                
                <h1> <span><Link to="/"><i class="fas fa-chevron-circle-left"/></Link></span>  About us</h1>
                <br/>
                <p>With an aim to provide supreme quality fabrics for textile & garment industries, we, Aditya Tex Fab started our business in the year 1991. We have attained a reputed position in the market as a reliable Manufacturer, Trader and Supplier owing to the untiring efforts of our employees. By making availability of Cotton fabric plain, Dobby, Polyester, Poplin Printed Fabric, Poplin, Cotton fabric print, Cotton fabric check, Satin, Printed Fabric, Erode check and various other kinds of fabrics, we are meeting varying demands of textile industry in efficient manner. Our team of talented and experienced designers give their best in adding value to complete product range..</p>
                <br/>
                <p>We are specialized in processing cambric fabric that is used for designing shirts, linens, handkerchiefs, ruffs, lace and various other comfortable garments. Our offered collection of satin is cherished for its smooth, glossy surface, draping qualities owing to its attractive weave structure. This fabric is perfect for designing bed sheets, kaftans, gowns, athletics shorts, nightgowns, blowses, etc. Cotton is most popular fabric in world owing to its versatility. It is mostly preferred by the clients as it is machine washable and has ability to withstand excess temperature when dyed.</p>
                <br/>
                <h3>Focus Towards Quality</h3>
                <br/>
                <p>Quality is the main element which provides a notable identity to our fabrics and makes them different from others in the market. Being a professional company, we adopt quality focused behavior in an effort to become a leading company in this field. We make sure that fabrics in the offering are of supreme grade to enable garment industry design attractive clothing and furnishing products. Different fabric are tested for their physical, mechanical and chemical properties. Some of the common parameters for which every type of fabric is tested, are:</p>
                <br/>
                <ul>
                    <li>Dimensional stability and durability</li>
                    <li>Color shedding</li>
                    <li>Dyeing & bleaching ability</li>
                    <li>Tear strength</li>
                    <li>Pilling</li>
                    <li>Shrinkage</li>
                    <li>Surface smoothness & softness</li>
                </ul>
                <br/>
                <h3>Spacious Warehousing Setup</h3>
                <br/>
                <p>For the safety of fabrics, we have established a well-equipped warehousing unit where we keep fibers, yarns and weaved fabric in bulk quantity. Its spaciousness enables us to store consumer goods in well organized manner and with utmost care. As fabrics easily catch fire, advance fire safety equipment are also installed in the premises. Also, for security purpose, CCTV cameras are outfitted in our unit to monitor movements of staff members.</p>
                <br/>
                <h3>Product Portfolio</h3>
                <br/>
                <p>Goyal Industries is known for its immense popularity in textile industry and makes availability of a beautiful collection of fabrics for garment designing, home furnishing and many other applications. Our collection of Fabrics is categorized as follows:</p>
                <br/>
                <ul>
                    <li>Cambric</li>
                    <li>Canvas</li>
                    <li>Dobby</li>
                    <li>Drill</li>
                    <li>Duck</li>
                    <li>Dye</li>
                    <li>Interlinking</li>
                    <li>Polyester</li>
                    <li>Poplin</li>
                    <li>Printed</li>
                    <li>Satin</li>
                </ul>

            </div>
            </div>
        </>
    )
}
export default Know;