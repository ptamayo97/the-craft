import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const Menu = (props) => {
  //   const { menu } = props;
  return (
    <Container>
      {/* <Head>
        <title>The Craft Taco Truck | Menu</title>

        <link rel="icon" href="/images/small_logo.jpeg" />
      </Head> */}
      <Row>
        <Col className="col-sm-12 col-md-6 offset-md-3 text-center">
          <h1 className="mt-5 py-5">Whats on the menu?</h1>
        </Col>
      </Row>
      {props.menu.map((item) => (
        <Row className="mb-3">
          <Col>
            <img
              src={item.image}
              alt=""
              style={{
                width: "100%",
                maxWidth: "542px",
                height: "auto",
              }}
            />
          </Col>
          <Col>
            <h3>{item.category}</h3>
            <Container>
              {item.items.map((food) => (
                <Row>
                  <Col>{food.price}</Col>
                  <Col>{food.name}</Col>
                </Row>
              ))}
            </Container>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Menu;
