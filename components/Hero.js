import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <img width="100%" src="/images/yummy.jpg" alt="Card image cap" />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
