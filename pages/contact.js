import React from "react";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const Example = (props) => {
  return (
    <Container>
      <Head>
        <title>The Craft Taco Truck | Contact</title>

        <link rel="icon" href="/images/small_logo.jpeg" />
      </Head>
      {/* <Card>
        <div className="mt-5 pt-5">
          <h1>Contact Us</h1>
        </div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input
              type="text"
              name="Name"
              id="examplePassword"
              placeholder="your name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Talk to us</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Card> */}
      <Row className="mt-5 pt-5">
        <Col className="col-sm-12 col-md-6 offset-md-3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Name</Label>
                  <Input
                    type="text"
                    name="Name"
                    id="examplePassword"
                    placeholder="your name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Talk to us</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
              </Form>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
