import React from 'react';
import { Nav, Navbar, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import logo from "../assets/logo.png"
import './Navbar.scss'

const Navigation = () => (
    <Navbar bg="warning" expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><img 
      
      src={logo} 
      width="120" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto link">
          <Nav.Link href="#home" >Passagens aéreas</Nav.Link>
          <Nav.Link href="#link" >Hotéis e pousadas</Nav.Link>
          <Nav.Link href="#link" >Promoções e pacotes</Nav.Link>

        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Encontre seu destino"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Pesquisar</Button>
          </Form>
          <NavDropdown className='mx-3 btn-login' title="Sua conta" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/3.2">
                Entrar 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cadastre-se</NavDropdown.Item>
            
            </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

export default Navigation