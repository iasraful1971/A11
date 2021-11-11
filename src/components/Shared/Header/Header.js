import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user ,logout} = useAuth()
    return (
        <Navbar className="navbar" expand="lg" sticky="top">
  <Container >
    <Navbar.Brand className="brand"><span className="span">LUCHINA</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink to="/home">Home </NavLink>
        <NavLink to="/home"> Services</NavLink>
        <NavLink to="/home">Add services</NavLink>
        {
          user.email && <NavLink to="/dashboard">Dashboard</NavLink>
        }
       {
         user.email ? <button className="login" onClick={logout}>log out</button> :
         <NavLink to="/login">Login here</NavLink>
       }
      
       
      </Nav>
    
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;