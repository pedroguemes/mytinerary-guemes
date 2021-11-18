import React from "react";
import {Carousel, Card, Row, Col} from 'react-bootstrap';
import  newyork from '../assets/newyork.jfif'
import  kualalumpur from '../assets/kualalumpur.jfif'
import  paris from '../assets/paris.jfif'
// import  macau from '../assets/macau.jpg'
// import  dubai from '../assets/dubai.jfif'
// import  valijaciudad from '../assets/valijaciudad.jpg'




let arrayCiudades =[
    {nombreCiudad:"Kuala Lumpur", pais:"Malaysia", imagenCiudad:{kualalumpur}},
    {nombreCiudad:"Paris", pais:"France", imagenCiudad:{paris}},
    {nombreCiudad:"New York", pais:"United States", imagenCiudad:{newyork}}
]


export default function Divcarousel () {
    return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades.map((_, idx) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={arrayCiudades.imagenCiudad} />
                                        <Card.Body>
                                        <Card.Title>{arrayCiudades.nombreCiudad}</Card.Title>
                                        <Card.Title>{arrayCiudades.pais}</Card.Title>
                                        <Card.Text>
                                         
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades.map((_, idx) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={arrayCiudades.imagenCiudad} />
                                        <Card.Body>
                                        <Card.Title>{arrayCiudades.nombreCiudad}</Card.Title>
                                        <Card.Title>{arrayCiudades.pais}</Card.Title>
                                        <Card.Text>
                                         
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                          <Row xs={1} md={2} className="g-4">
                                {arrayCiudades.map((_, idx) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={arrayCiudades.imagenCiudad} />
                                        <Card.Body>
                                        <Card.Title>{arrayCiudades.nombreCiudad}</Card.Title>
                                        <Card.Title>{arrayCiudades.pais}</Card.Title>
                                        <Card.Text>
                                         
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                         </Row>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}