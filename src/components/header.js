import React from "react";
import "../App.css";
import "../media.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
function Header(props) {
  const { carditemnum } = props;
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Nav>
        <Navbar.Brand>
          <span className="brand">TECH MARKET</span>{" "}
        </Navbar.Brand>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link>
          {" "}
          <Link to="id1" smooth={true}>
            {" "}
            <i className="fas fa-shopping-cart	"></i>
          </Link>{" "}
          {carditemnum !== 0 && (
            <span className="badge badge-danger">{carditemnum}</span>
          )}{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
