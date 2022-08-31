import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
    <Router>
      <Navbar expand='sm'>
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
          
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
        
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button onClick={() => alert('Work in Progress: Contact Me')}><span>Contact Me</span></button>
            </HashLink>
          </span>
        </Container>
      </Navbar>
    </Router>
  )
}
