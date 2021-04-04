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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    // <Fragment>
    //   <Navbar color="faded" light>
    //     <NavbarBrand href="/" className="mr-auto">
    //       reactstrap
    //     </NavbarBrand>
    //     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //     <Collapse isOpen={!collapsed} navbar>
    //       <Nav navbar>
    //         <NavItem>
    //           <Link href="/" passHref>
    //             <NavLink>Home</NavLink>
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link href="/menu" passHref>
    //             <NavLink>Menu</NavLink>
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link href="/contact" passHref>
    //             <NavLink>Contact</NavLink>
    //           </Link>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </Fragment>
    <Fragment>
      <Navbar color="light" light expand="md" fixed="top">
        <Container>
          <Link href="/" passHref>
            <NavbarBrand>
              <img
                src="/images/square_logo.jpeg"
                alt=""
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {/* <Navbar
        expand="lg"
        light={true}
        className="shadow mb-5 ivory"
        color="light"
        fixed="top"
      >
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col sm={3}>
              <Link href="/" passHref>
                <NavbarBrand>
                  <img
                    src="/images/square_logo.jpeg"
                    alt=""
                    // className="img-fluid"
                    style={{
                      borderRadius: "50%",
                      width: "10%",
                      minHeight: "50%",
                    }}
                  />
                </NavbarBrand>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center" sm={3}>
              <div>
                <img src="/images/website.png" alt="" style={{ width: "8%" }} />
              </div>
            </Col>
            <Col className="clearfix" sm={12}>
              <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              <Row>
                <Nav className="ml-auto  " navbar>
                  <Col>
                    <NavItem>
                      <Link href="/" passHref>
                        <NavLink>Home</NavLink>
                      </Link>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem>
                      <Link href="/menu" passHref>
                        <NavLink>Menu</NavLink>
                      </Link>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem>
                      <Link href="/contact" passHref>
                        <NavLink>Contact</NavLink>
                      </Link>
                    </NavItem>
                  </Col>

                  <NavItem>
                <Link href="/team" passHref>
                  <NavLink>The Team</NavLink>
                </Link>
              </NavItem>
                </Nav>
                </Collapse>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar> */}
    </Fragment>
  );
};

export default NavBar;
