import React, { Fragment, useState } from "react";
import "../styles/Home.module.css";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <Navbar
        expand="lg"
        light={true}
        className="shadow mb-5 ivory"
        color="light"
        fixed="top"
      >
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col>
              <Link href="/" passHref>
                <NavbarBrand>
                  <img
                    src="/images/square_logo.jpeg"
                    alt=""
                    className="img-fluid"
                    style={{
                      borderRadius: "50%",
                      width: "10%",
                      minHeight: "50%",
                    }}
                  />
                </NavbarBrand>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <img src="/images/website.png" alt="" style={{ width: "20%" }} />
            </Col>
            <Col className="clearfix">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto float-right " navbar>
                  <NavItem>
                    <Link href="/" passHref>
                      <NavLink>Home</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/menu" passHref>
                      <NavLink>Menu</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/contact" passHref>
                      <NavLink>Contact</NavLink>
                    </Link>
                  </NavItem>
                  {/* <NavItem>
                <Link href="/team" passHref>
                  <NavLink>The Team</NavLink>
                </Link>
              </NavItem> */}
                </Nav>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
