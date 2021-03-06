import React from "react";
import logosecundario from '../assets/logosecundario.png';
import {BsPersonCircle} from 'react-icons/bs';
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const logopersona =<BsPersonCircle className="logoperson"/>;
// export default function Navheader(){
//     return (
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Container>
//                 <Navbar.Brand href="#home">Mytinerary</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//     )
// }

export default function Navheader(){
    return (
        <div>
        <Navbar bg="myBlue" variant="light" sticky="top" expand="sm" collapseOnSelect>
              <Navbar.Brand>
                  <img height="180" width="210" src={logosecundario}/>{' '}
                  Mytinerary
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
              <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#cities">Cities</Nav.Link>
                  {/* <NavDropdown title="Cities">
                    <NavDropdown.Item href="#products/buenosaires">All Cities</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#products/buenosaires">Buenos Aires</NavDropdown.Item>
                    <NavDropdown.Item href="#products/bangkok">Bangkok</NavDropdown.Item>
                    <NavDropdown.Item href="#products/melbourne">Melbourne</NavDropdown.Item>
                    <NavDropdown.Item href="#products/barcelona">Barcelona</NavDropdown.Item>
                    <NavDropdown.Item href="#products/london">London</NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
                  {/* <BsPersonCircle className="logoperson"/> */}
                  <div>
                    <NavDropdown className="logopersona" title={logopersona}>
                      <NavDropdown.Item href="#products/login">Log-In</NavDropdown.Item>
                      <NavDropdown.Item href="#products/signup">Sign-up</NavDropdown.Item>
                    </NavDropdown>
                  </div>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
    )
}