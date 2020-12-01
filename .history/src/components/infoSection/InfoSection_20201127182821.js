import React from 'react'
import contextInfoSection from './contextInfoSection'
import imagensvg3 from '../../images/imagensvg3.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './infoSection.css'
import {Col, Container,Row,} from 'react-bootstrap'

export default function InfoSection() {
    return (
            <Container fluid  className="content-infoSection">
                <Row>
                    {
                        contextInfoSection.map(item => {
                            return {firstTitle,secundTitle,text,url}
                            

                        })
                    }
                    <Col  md={6} lg={6} >
                        <div className="content-text-infoSection">
                            <h2 >thinkcode.<span className="text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">developers</span></h2>
                            <p className="text-infoSection">Diseño y desarrollo de aplicaciones y páginas web para tu negocio o proyecto.
                            Disfrutamos mucho con lo que hacemos, compruébalo.</p>
                        </div>
                    </Col>
                    <Col  md={6} lg={6}  >
                        <img  className="imagensvg-infoSection" alt="" src={imagensvg3}></img>
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
