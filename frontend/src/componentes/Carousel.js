import React from "react";
import {Carousel} from 'react-bootstrap';
import  newyork from '../assets/newyork.jfif'
import  macau from '../assets/macau.jpg'
import  paris from '../assets/paris.jfif'
import  dubai from '../assets/dubai.jfif'
import  valijaciudad from '../assets/valijaciudad.jpg'



export default function (){
    return (
        <div className="carrousel">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={newyork}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>New Yourk, United States.</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={macau}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Macau, China.</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={paris}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Paris, France.</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={dubai}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Dubai, United Arab Emirates.</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={valijaciudad}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>And much more!</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}