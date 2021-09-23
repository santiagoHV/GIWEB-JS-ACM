import React, {Component} from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

class NavBar extends Component{

    // constructor(){}
    render(){
        return(
            <Navbar expand="lg" className={'my-navbar'}>
                <Container>
                <Navbar.Brand href="#home">Super heroes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default NavBar