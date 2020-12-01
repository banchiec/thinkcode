import React from 'react'
// import {AlltextInfoSection} from './AlltextInfoSection'
import imagensvg3 from '../../images/imagensvg3.svg'
import banner from '../../images/banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './infoSection.css'
import {Col, Container,Row,} from 'react-bootstrap'

export default function InfoSection() {

    return (
            <Container fluid  className="content-infoSection">
                <Row>
                    {
                        // AlltextInfoSection.map((item,index) => {
                        //     return (
                        //         <Row>
                        //         <Col  md={6} lg={6} >
                        //             {/* <h1 key={index}>{item.firstTitle}</h1> */}
                        //             <div className="content-text-infoSection">
                        //                 <h2 >{item.firstTitle}<span className="text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">{item.secundTitle}</span></h2>
                        //                 <p className="text-infoSection">{item.text}</p>
                        //             </div>
                        //         </Col>
                        //         <Col  md={6} lg={6}  >
                        //             <img  className="imagensvg-infoSection" alt="" src={imagensvg3}></img>
                        //         </Col>
                        //         </Row>
                        //     )
                        // })
                    } 

                    <Col  md={6} lg={6} >
                        <div className="content-text-infoSection">
                            <h2 >thinkcode.<span className="text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">developers</span></h2>
                            <p className="text-infoSection">Diseño y desarrollo de aplicaciones y páginas web para tu negocio o proyecto.
                            Disfrutamos mucho con lo que hacemos, compruébalo.</p>
                        </div>
                    </Col>
                    <Col  md={6} lg={6}  >
                        <img  className="imagensvg-infoSection" alt="" src={banner}></img>
                    </Col>
                    
                </Row>
            
            </Container >
            // <Container fluid  className="content-infoSection">
            //     <Row>
            //         <Col  md={6} lg={6} >
            //             <div className="content-text-infoSection">
            //                 <h2 >thinkcode.<span className="text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">developers</span></h2>
            //                 <p className="text-infoSection">Diseño y desarrollo de aplicaciones y páginas web para tu negocio o proyecto.
            //                 Disfrutamos mucho con lo que hacemos, compruébalo.</p>
            //             </div>
            //         </Col>
            //         <Col  md={6} lg={6}  >
            //             <img  className="imagensvg-infoSection" alt="" src={imagensvg3}></img>
            //         </Col>
                    
            //     </Row>
            
            // </Container >
    )
}
