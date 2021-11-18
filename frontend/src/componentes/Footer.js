import React from "react";
import logosecundario from '../assets/logosecundario.png';
import {BsPersonCircle} from 'react-icons/bs';
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const logopersona =<BsPersonCircle className="logoperson"/>;


export default function Footer(){
    return (
        <div>
        <Navbar bg="myFooter" variant="light" sticky="bottom" expand="sm" collapseOnSelect>
              <Navbar.Toggle />
              <Navbar.Collapse>
              <Navbar.Brand>
                  <img height="150" width="170" className="logofooter" src={logosecundario}/>{' '}
                  Mytinerary
              </Navbar.Brand>
              <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#cities">Cities</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
    )
}