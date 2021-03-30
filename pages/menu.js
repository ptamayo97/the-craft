import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class menu extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-sm-12 col-md-6 offset-md-3 text-center">
            <h1 className="mt-5 pt-5">Whats on the menu?</h1>
          </Col>
        </Row>
        <div>
          <img width="100%" src="/images/menu.jpeg" alt="Card image cap" />
        </div>
      </Container>
    );
  }
}

export default menu;
