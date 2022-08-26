import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import vegRice from "./../../Assets/images/vegRice.jpg";
import "./Header.css";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar  variant="dark" style={{ backgroundColor: "#520066" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={vegRice} alt="Dishes" style={{ width: "50px", borderRadius: "50%" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/allDishes">Dishes</Nav.Link>
            <Nav.Link href="/voting">Voting</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>

        </Container>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signUp">Sign Up</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
     
    </div>
  );
};

export default Header;