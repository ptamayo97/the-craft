import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Example = (props) => {
  return (
    <Jumbotron>
      <Container>
        {/* <img width="100%" src="/images/yummy.jpg" alt="Card image cap" /> */}
        {props.children}
      </Container>
    </Jumbotron>
  );
};

export default Example;
