import React, { Fragment, useState } from "react";
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
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <Navbar
        expand="lg"
        light={true}
        color="light"
        fixed="top"
        className="shadow"
      >
        <Container>
          <NavbarBrand href="#">The Craft Taco Truck</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
                <Link href="/" passHref>
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
